import bladeTypes from "@/models/constants/bladeTypes";
import keyTypes from "@/models/constants/keyTypes";
import manufactors from "@/models/constants/manufactors";
import serviceTypes from "@/models/constants/serviceTypes";
import { searchKey } from "@/store/features/keySlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { faPlus, faSearch, faSync } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ComboBox from "../ComboBox/ComboBox";

interface KeyToolbarProps {
  handleClear(): void;
}

const KeyToolbar = (props: KeyToolbarProps) => {
  const [search, setSearch] = useState("");
  const storeKeys = useAppSelector((state) => state.keys);
  // const filteredKeys = useAppSelector((state) => state.keys.filteredList);
  const dispatch = useAppDispatch();
  const [keys, setKeys] = useState(storeKeys?.keyList);
  const [manufactor, setManufactor] = useState("");
  const [keyType, setKeyType] = useState("");
  const [bladeType, setBladeType] = useState("");
  const [serviceType, setServiceType] = useState("");

  const handleSearch = () => {
    if (search !== "") {
      dispatch(searchKey(search));
      setKeys(storeKeys?.filteredList);
    } else {
      setKeys(storeKeys?.keyList);
    }
  };

  return (
    <div className="rounded-md my-1 py-2 flex flex-col lg:flex-row justify-between">
      <div className="my-2 lg:my-0 flex flex-row items-center">
        <Link
          href="chaves/adicionar"
          className="rounded-sm shadow-lg bg-green-500 py-1 px-3 text-sm text-white hover:bg-green-600"
        >
          {/* New key button */}
          <FontAwesomeIcon icon={faPlus} className="mx-2" height={25} />
          <span className="hidden md:inline-block">Nova chave!</span>
        </Link>
        <div>
          <ComboBox
            list={manufactors}
            onChange={(e) => setManufactor(e.target.value)}
          />
        </div>
        <div>
          <ComboBox
            list={keyTypes}
            onChange={(e) => setKeyType(e.target.value)}
          />
        </div>
        <div>
          <ComboBox
            list={bladeTypes}
            onChange={(e) => setBladeType(e.target.value)}
          />
        </div>
        <div>
          <ComboBox
            list={serviceTypes}
            onChange={(e) => setServiceType(e.target.value)}
          />
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
              onClick={() => {
                props.handleClear();
                setSearch("");
              }}
              className="rounded-sm shadow-lg bg-blue-500 mx-1 py-1 px-3 text-sm text-white hover:bg-blue-600"
            >
              <FontAwesomeIcon icon={faSync} height={25} />
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default KeyToolbar;
