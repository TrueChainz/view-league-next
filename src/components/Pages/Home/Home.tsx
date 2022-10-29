"use client";
import PlayerSearch from "./PlayerSearch";
import RegionModal from "../../Modals/RegionModal";
import useRegion from "../../../hooks/useRegion";
import useModal from "../../../hooks/useModal";

const Home = () => {
  const [showRegionModal, setShowRegionModal] = useModal(false);
  const [region, setRegion] = useRegion("euw");

  const openModal = (open: boolean): void => {
    setShowRegionModal(open);
  };

  const closeModal = (region?: string): void => {
    if (region) setRegion(region);
    setShowRegionModal(false);
  };

  return (
    <div className="flex  mx-auto bg-red-200">
      <PlayerSearch openModal={openModal} region={region} />
      {showRegionModal && (
        <RegionModal closeModal={closeModal} region={region} />
      )}
    </div>
  );
};

export default Home;