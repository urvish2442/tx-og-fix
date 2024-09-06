import React, { useEffect } from "react";
import { usePublicProfile } from "./PublicProfileProvider";
import { Button, CommonProductBLock } from "@/styles/pages/main.style";
import Link from "next/link";
import { usePublicProfileItems } from "@/hooks/useFetchHooks";
import { Spinner } from "react-bootstrap";
import { ItemCard } from "..";
import { useLikeItem } from "@/hooks/useHome";

const CreatedTab = ({ ownerAddress, selectedCollection }) => {
    const { search, sort, grid, status } = usePublicProfile();
    // console.log({ search, sort, grid, status });
    const { handleLike } = useLikeItem();
    const { loading, page, items, hasMore, handlePageChange } =
        usePublicProfileItems({
            ownerAddress,
            ContextSearch: search,
            ContextSort: sort,
            ContextStatus: status,
            selectedCollection,
            created: true,
        });

    return (
        <>
            <CommonProductBLock className="explore-block-product">
                {loading && page == 1 ? (
                    <>
                        <div className="d-flex justify-content-center vh-100 align-items-center">
                            <Spinner animation="border" size="lg" />
                        </div>
                    </>
                ) : !items?.length > 0 ? (
                    <>
                        <div className="d-flex justify-content-center">
                            {/* No NFTs Found! */}
                        </div>
                    </>
                ) : (
                    <div
                        className={`common-product-block  ${grid === "five" && "flex-width-five"
                            }`}
                    >
                        {items?.map((item, index) => (
                            <ItemCard
                                key={index}
                                item={{
                                    ...item,
                                    // collectionImage:
                                    //     collectionDetails?.lowLogo,
                                    // collectionName: collectionDetails?.name,
                                }}
                                handleLike={handleLike}
                            />
                        ))}
                    </div>
                )}
                {/* <div className="common-product-block-inner">
                            <div className="common-product-block-inner-width">
                                <div className="top-block-product">
                                    <h4>Sweet Baby #1</h4>
                                    <Link href="{}">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M2.78922 8.75842L6.36783 12.5299C7.25506 13.4649 8.74493 13.4649 9.63217 12.5299L13.2108 8.75842C14.5964 7.29812 14.5964 4.93052 13.2108 3.47022C11.8252 2.00993 9.57862 2.00993 8.19299 3.47022C8.08808 3.58078 7.91192 3.58078 7.80701 3.47022C6.42138 2.00993 4.17484 2.00993 2.78922 3.47022C1.40359 4.93052 1.40359 7.29812 2.78922 8.75842Z"
                                                fill="#B9B8BB"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                                <div className="product-details-profile full-width">
                                    <div className="product-profile">
                                        <img
                                            src={
                                                "../../images/profile-img-product.png"
                                            }
                                            alt=""
                                        ></img>
                                        <div className="product-profile-details">
                                            <p>Creator</p>
                                            <h5>Hakunamatata</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-img-time">
                                    <img
                                        src={"../../images/product-img-block.png"}
                                        alt=""
                                    ></img>
                                </div>
                                <div className="product-details-profile full-width">
                                    <div className="product-profile">
                                        <img
                                            src={
                                                "../../images/profile-img-product.png"
                                            }
                                            alt=""
                                        ></img>
                                        <div className="product-profile-details">
                                            <p>Owner</p>
                                            <h5>Hakunamatata</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-details-profile">
                                    <div className="product-profile">
                                        <img
                                            src={"../../images/ethe-icon-blue.svg"}
                                            alt=""
                                        ></img>
                                        <div className="product-profile-details">
                                            <p>ETH</p>
                                            <h5>
                                                <span>0.0041</span>
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="btn-product">
                                        <button>
                                            <span>Purchase</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div> */}
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
            </CommonProductBLock>
        </>
    );
}

export default CreatedTab