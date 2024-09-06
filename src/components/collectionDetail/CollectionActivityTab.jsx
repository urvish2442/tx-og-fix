import { useCollectionActivities } from "@/hooks/useFetchHooks";
import React, { useState } from "react";
import { usePublicProfile } from "../PublicProfile/PublicProfileProvider";
import { useRouter } from "next/router";
import Link from "next/link";
import { shortenText } from "@/utils";
import moment from "moment";
import { CHAIN_LOGO } from "@/constant";
import { COLLECTION_EVENT_BUTTONS } from "./CollectionEventButtons";
import { Spinner } from "react-bootstrap";
import { Button } from "@/styles/pages/main.style";
import { PATH_DASHBOARD } from "@/routes/paths";
import ImageLoader from "../Common/ImageLoader";

const CollectionActivityTab = ({ itemCollection = "", chainId = null }) => {
    const { push } = useRouter();
    const { search: ContextSearch } = usePublicProfile();
    const [selectedActivity, setSelectedActivity] = useState([]);
    const { items, loading, page, hasMore, handlePageChange } =
        useCollectionActivities({
            itemCollection,
            ContextSearch,
            chainId,
            selectedActivity,
        });
    const itemRouteHandler = (item) => {
        if (!item?.itemCollection || !item.tokenId) return;
        push({
            pathname: PATH_DASHBOARD.item.details,
            query: {
                itemCollection: item?.itemCollection,
                chainId: item?.chainId,
                tokenId: item?.tokenId,
            },
        });
    };
    const activityTabEvents = [
        { value: "Listed", name: "Listings", label: "Listings" },
        { value: "Minted", name: "Mints", label: "Mints" },
        { value: "Transfer", name: "Transfers", label: "Transfers" },
        { value: "Purchase", name: "Sales", label: "Sales" }, //TODO : to set proper key
        { value: "Offer", name: "Offers", label: "Offers" },
        {
            value: "Remove LIsting",
            name: "Canceled Listings",
            label: "Canceled Listings",
        },
        {
            value: "Bids Cancle",
            name: "Canceled Offers",
            label: "Canceled Offers",
        },
    ];
    const handleActivityCheckBox = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedActivity((prevState) => [...prevState, value]);
        } else {
            setSelectedActivity((prevState) =>
                prevState.filter((item) => item !== value)
            );
        }
    };
    return (
        <>
            <div className="filter-block-data-block">
                <div className="filter-block-data-block-left">
                    <div className="filter-block-data-block-left-inner">
                        <div className="filter-block-data-block-left-inner-public">
                            <h2>Event Type</h2>
                            <div className="checkbox-block-custom-filter">
                                {activityTabEvents.map((event, index) => (
                                    <div
                                        className="checkbox-filter-block"
                                        key={index}
                                    >
                                        <input
                                            type="checkbox"
                                            name={event.name}
                                            id={event.name}
                                            value={event.value}
                                            onChange={handleActivityCheckBox}
                                            checked={selectedActivity.includes(
                                                event.value
                                            )}
                                        ></input>
                                        <label htmlFor={event.name}>
                                            <span>
                                                <svg
                                                    width="8"
                                                    height="6"
                                                    viewBox="0 0 8 6"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M1.5 2.9987L3.375 4.66536L6.5 1.33203"
                                                        stroke="black"
                                                        strokeWidth="1.66667"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </span>
                                            <div className="flex-block-check">
                                                <h4>{event.label}</h4>
                                            </div>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="filter-block-data-block-right">
                    {loading && page == 1 ? (
                        <>
                            <div className="d-flex justify-content-center vh-100 align-items-center">
                                <Spinner animation="border" size="lg" />
                            </div>
                        </>
                    ) : !items?.length > 0 ? (
                        <>
                            <div className="d-flex justify-content-center"></div>
                        </>
                    ) : (
                        <>
                            {items?.map((event, index) => (
                                <div
                                    className="cancel-btn-block-inner"
                                    key={index}
                                >
                                    <div className="cancel-btn-block">
                                        {event?.name
                                            ? COLLECTION_EVENT_BUTTONS[
                                                  event?.name
                                              ]
                                            : ""}
                                        {/* <Link
                                    href=""
                                    onClick={(e) => e.preventDefault()}
                                >
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clip-path="url(#clip0_4659_9211)">
                                            <path
                                                d="M2.92984 17.0698C1.97473 16.1474 1.21291 15.0439 0.688821 13.8239C0.164731 12.6038 -0.111131 11.2916 -0.122669 9.96385C-0.134207 8.63605 0.11881 7.31926 0.621618 6.09029C1.12443 4.86133 1.86696 3.74481 2.80589 2.80589C3.74481 1.86696 4.86133 1.12443 6.09029 0.621618C7.31926 0.11881 8.63605 -0.134207 9.96385 -0.122669C11.2916 -0.111131 12.6038 0.164731 13.8239 0.688821C15.0439 1.21291 16.1474 1.97473 17.0698 2.92984C18.8914 4.81586 19.8994 7.34188 19.8766 9.96385C19.8538 12.5858 18.8021 15.0939 16.948 16.948C15.0939 18.8021 12.5858 19.8538 9.96385 19.8766C7.34188 19.8994 4.81586 18.8914 2.92984 17.0698ZM11.3998 9.99984L14.2298 7.16984L12.8198 5.75984L9.99984 8.58984L7.16984 5.75984L5.75984 7.16984L8.58984 9.99984L5.75984 12.8298L7.16984 14.2398L9.99984 11.4098L12.8298 14.2398L14.2398 12.8298L11.4098 9.99984H11.3998Z"
                                                fill="#F5841F"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_4659_9211">
                                                <rect
                                                    width="20"
                                                    height="20"
                                                    fill="white"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span>{EVENT_NAMES[event?.name]}</span>
                                </Link> */}
                                    </div>
                                    <div
                                        className="profile-img-block pointer"
                                        onClick={() => itemRouteHandler(event)}
                                    >
                                        <ImageLoader
                                            src={event?.image}
                                            alt="item-img"
                                            style={{
                                                width: "60px",
                                                height: "60px",
                                                borderRadius: "10px",
                                                objectFit: "cover",
                                            }}
                                        />
                                        {/* <img
                                            src={
                                                event?.image ||
                                                "../../images/item-img.png"
                                            }
                                            alt="item-img"
                                        ></img> */}
                                        <div className="text-img-block">
                                            <h3>{event?.itemName || ""}</h3>
                                            <p>
                                                {event?.collectionName || ""}
                                                {/* <span>
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M14.167 2.78259C15.4239 3.50831 16.4694 4.5497 17.2002 5.80368C17.9309 7.05765 18.3215 8.48074 18.3332 9.93204C18.3449 11.3833 17.9774 12.8126 17.267 14.0782C16.5566 15.3438 15.528 16.4019 14.283 17.1479C13.038 17.8938 11.6198 18.3016 10.1687 18.331C8.71768 18.3603 7.28412 18.0102 6.00995 17.3153C4.73579 16.6204 3.66522 15.6047 2.90421 14.3689C2.14321 13.133 1.71817 11.7199 1.67116 10.2693L1.66699 9.99926L1.67116 9.72926C1.71783 8.29008 2.13662 6.88756 2.88669 5.65842C3.63677 4.42928 4.69254 3.41547 5.95107 2.71583C7.2096 2.01619 8.62795 1.65459 10.0678 1.66629C11.5077 1.67799 12.92 2.06259 14.167 2.78259ZM13.0895 7.74343C12.946 7.59995 12.7551 7.51375 12.5526 7.50102C12.35 7.48828 12.1498 7.54988 11.9895 7.67426L11.9112 7.74343L9.16699 10.4868L8.08949 9.41009L8.01116 9.34093C7.85081 9.21664 7.65064 9.15511 7.44816 9.16789C7.24569 9.18066 7.05483 9.26686 6.91138 9.41031C6.76792 9.55377 6.68173 9.74462 6.66895 9.9471C6.65618 10.1496 6.71771 10.3497 6.84199 10.5101L6.91116 10.5884L8.57783 12.2551L8.65616 12.3243C8.8023 12.4376 8.98202 12.4992 9.16699 12.4992C9.35197 12.4992 9.53168 12.4376 9.67783 12.3243L9.75616 12.2551L13.0895 8.92176L13.1587 8.84343C13.283 8.68309 13.3446 8.48288 13.3319 8.28036C13.3192 8.07784 13.233 7.88692 13.0895 7.74343Z"
                                                    fill="#2BD7EF"
                                                />
                                            </svg>
                                        </span> */}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="puls-block-flex">
                                        <div className="puls-block-flex-inner">
                                            {[
                                                "Purchase",
                                                "Listed",
                                                "Offer",
                                            ].includes(event?.name) && (
                                                <>
                                                    <img
                                                        src={
                                                            CHAIN_LOGO[
                                                                event?.chainId
                                                            ]
                                                        }
                                                        alt="chainLogo"
                                                    />
                                                    <h3>
                                                        {event?.price}
                                                        {/* {" "}{event?.symbol} */}
                                                    </h3>
                                                </>
                                            )}
                                        </div>
                                        <p>
                                            {event?.name === "Minted"
                                                ? `By ${shortenText(
                                                      event?.to || ""
                                                  )}`
                                                : `By ${shortenText(
                                                      event?.from || ""
                                                  )}`}
                                        </p>
                                        {/* <p>From 2837474</p> */}
                                    </div>
                                    <div className="min-ago-block">
                                        <p>{moment(event?.date).fromNow()}</p>
                                    </div>
                                </div>
                            ))}
                        </>
                    )}
                    {loading && page > 1 && (
                        <div className="d-flex justify-content-center m-3">
                            <Spinner size="lg" />
                        </div>
                    )}
                    {!loading && hasMore && (
                        <div className="common-btn-block">
                            <Button
                                className="border-dark-button"
                                isBorderBtn={true}
                                onClick={handlePageChange}
                            >
                                Load more
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default CollectionActivityTab;
