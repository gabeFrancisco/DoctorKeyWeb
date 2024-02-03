import { searchKey } from '@/store/features/keySlice'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { faPlus, faSearch, faSync } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useState } from 'react'

const KeyToolbar = () => {
  const storeKeys = useAppSelector((state) => state.keys);
  const [search, setSearch] = useState("");
  const [keys, setKeys] = useState(storeKeys?.keyList);
  const dispatch = useAppDispatch();
  const handleSearch = () => {
    if (search !== "") {
      dispatch(searchKey(search));
      setKeys(storeKeys?.filteredList);
    } else {
      setKeys(storeKeys?.keyList);
    }
  };

  const handleClear = () => {
    // dispatch(clearSearch());
    setKeys(storeKeys?.keyList);
    setSearch("");
  };
  return (
    <div className="rounded-md  w-full flex flex-row justify-between items-center my-1 py-2">
        <div>
          <Link
            href="chaves/adicionar"
            className="rounded-sm shadow-lg bg-green-500 py-2 px-3 text-sm text-white hover:bg-green-600"
          >
            {/* New key button */}
            <FontAwesomeIcon icon={faPlus} className="mx-2" height={25} />
            <span className="hidden md:inline-block">Nova chave!</span>
          </Link>
        </div>

        <div className="flex flex-row items-stretch">
          <input
            type="text"
            placeholder="Pesquisar por modelo"
            className="rounded-md border-2 block w-52 lg:w-full p-0.5 text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="rounded-sm shadow-lg bg-green-500 mx-1 py-1 px-3 text-sm text-white hover:bg-green-600"
          >
            <FontAwesomeIcon icon={faSearch} height={25} />
          </button>
          {search !== "" ? (
            <button
              onClick={handleClear}
              className="rounded-sm shadow-lg bg-blue-500 mx-1 py-1 px-3 text-sm text-white hover:bg-blue-600"
            >
              <FontAwesomeIcon icon={faSync} height={25} />
            </button>
          ) : null}
        </div>
      </div>
  )
}

export default KeyToolbar