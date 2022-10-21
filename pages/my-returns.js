import { useRouter } from "next/router";
import React, { useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { FiChevronLeft } from "react-icons/fi";
import PopularProducts from "../components/home/mobile/MainHomeContent/components/PopularProducts";
import EmptyReturnOrderBox from "../components/myorder/EmptyReturnOrderBox";
import { getToken } from "../layout/utils";
import { AppContext } from "./_app";

const MyReturns = () => {

  const router = useRouter()
  const appData = useContext(AppContext);

  const APIUrl = process.env.NEXT_PUBLIC_API_URL;
  const token = appData.token;
  const customertoken = appData.token;
  const countryCode = appData.countryCode;

  const [deleteConfirm, setDeleteConfirm] = useState(false);

  const [cardsList, setCardsList] = useState([]);
  const [selectedCard, setSelectedCard] = useState(
    cardsList.length > 0 ? cardsList["0"] : {}
  );

  const fetchCards = async () => {

    const customertoken = getToken();

    try {
      const res = await fetch(
        `${APIUrl}/${countryCode.toLowerCase()}/V1/customer/get-cards`,
        {
          method: "POST",
          body: JSON.stringify({
            data: {
              token: customertoken,
              customer_id: appData.customerid,
            },
          }),

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${customertoken}`,
          },
        }
      );
      const resData = await res.json();
      if (resData.success === 200) {
        setCardsList(resData.data.items);
        setDeleteConfirm(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  const deleteCard = async (card_id) => {

    const customertoken = getToken();

    try {
      const res = await fetch(
        `${APIUrl}/${countryCode.toLowerCase()}/V1/customer/delete-cards`,
        {
          method: "POST",
          body: JSON.stringify({
            data: {
              token: customertoken,
              id: card_id,
              customer_id: appData.customerid,
            },
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${customertoken}`,
          },
        }
      );
      const resData = await res.json();
      if (resData.success === 200) {
        toast.success("Card Deleted Successfully.");
      } else {
        console.log("Error: ", resData?.message);
      }
      fetchCards();
    } catch (err) {
      console.log(err);
    }
  };

  const removeCard = (product) => {
    setDeleteConfirm(true);
    setSelectedCard(product);
  };

  const confirmRemoveCard = () => {
    deleteCard(selectedCard.card_id);
  };

  const cancelRemoveCard = () => {
    setDeleteConfirm(false);
  };

  return (
    <div className="my-cards-ui return-page-ui">
      <div className="cart-header">
        <span onClick={() => router.back()} className="carent-icon-circle icon">
          <FiChevronLeft />
        </span>
        Return Orders
      </div>
      <EmptyReturnOrderBox />
      <PopularProducts />
    </div>
  );
};

export default MyReturns;
