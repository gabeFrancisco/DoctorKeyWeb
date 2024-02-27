import bladeTypes from "@/models/constants/bladeTypes";
import keyTypes from "@/models/constants/keyTypes";
import manufactors from "@/models/constants/manufactors";
import serviceTypes from "@/models/constants/serviceTypes";
import { searchKeyByName, searchKey } from "@/store/features/keySlice";
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
      dispatch(searchKeyByName(search));
      setKeys(storeKeys?.filteredList);
    } else {
      setKeys(storeKeys?.keyList);
    }
  };

  useEffect(() => {
    dispatch(searchKey({ manufactor, keyType, bladeType, serviceType }));
  }, [manufactor, keyType, bladeType, serviceType]);

  return (
    <div className="rounded-md my-1 py-2 flex flex-col lg:flex-row justify-between">
      <div className="my-2 lg:my-0 flex flex-wrap flex-row items- justify-between">
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
            placeholder="Fabricante"
            value={manufactor}
          />
        </div>
        <div>
          <ComboBox
            list={keyTypes}
            onChange={(e) => setKeyType(e.target.value)}
            placeholder="Tipo"
            value={keyType}
          />
        </div>
        <div>
          <ComboBox
            list={bladeTypes}
            onChange={(e) => setBladeType(e.target.value)}
            placeholder="Lâmina"
            value={bladeType}
          />
        </div>
        <div className="my-2">
          <ComboBox
            list={serviceTypes}
            onChange={(e) => setServiceType(e.target.value)}
            placeholder="Serviço"
            value={serviceType}
          />
        </div>

        <div className="flex flex-row items-stretch flex-wrap my-2 lg:my-0">
          <input
            type="text"
            placeholder="Pesquisar por modelo"
            className="rounded-sm border-2 block w-52 mt-1 lg:w-full p-0.5 text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="rounded-sm shadow-lg bg-green-500 mx-1 py-1 px-3 text-sm text-white hover:bg-green-600"
          >
            <FontAwesomeIcon icon={faSearch} height={25} />
          </button>
          <button
            onClick={() => {
              setManufactor("");
              setKeyType("");
              setBladeType("");
              setServiceType("");
              setSearch("");
              props.handleClear();
            }}
            className="rounded-sm shadow-lg bg-blue-500 mx-1 px-3 text-sm text-white hover:bg-blue-600"
          >
            <FontAwesomeIcon icon={faSync} height={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default KeyToolbar;
