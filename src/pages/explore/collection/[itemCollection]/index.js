import { PublicProfile } from "@/components/PublicProfile/PublicProfileProvider";
import CollectionDetailComponent from "@/components/collectionDetail/CollectionDetailComponent";
import { FRONT_END_DOMAIN } from "@/constant";
import { getOgCollectionService } from "@/redux/services/ogService";
import React from "react";

export async function getServerSideProps(context) {
    const { itemCollection } = context.params;
    const [address, chainId] = itemCollection.split("-");

    try {
        const { data } = await getOgCollectionService({
            itemCollection: address,
            chainId: chainId,
        });
        const {
            name = null,
            description = "",
            mediumLogo = "",
            coverUrl = "",
            floorPrice = "",
            floorSymbol = "",
            tradingVolume = "",
            totalItemCount = "",
            totalOwners = "",
            creatorName = "",
            royalties = "",
            chainId: chain = "",
        } = data?.collectionDetails || {};

        const ogImageUrl = `${FRONT_END_DOMAIN}/api/og/collection?name=${encodeURIComponent(
            name || ""
        )}&imageUrl=${encodeURIComponent(
            mediumLogo
        )}&coverUrl=${encodeURIComponent(
            coverUrl || ""
        )}&floorPrice=${encodeURIComponent(
            floorPrice || ""
        )}&floorSymbol=${encodeURIComponent(
            floorSymbol || ""
        )}&tradingVolume=${encodeURIComponent(
            tradingVolume || ""
        )}&totalItemCount=${encodeURIComponent(
            totalItemCount || ""
        )}&totalOwners=${encodeURIComponent(
            totalOwners || ""
        )}&creatorName=${encodeURIComponent(
            creatorName || ""
        )}&royalties=${encodeURIComponent(
            royalties
        )}&chainId=${encodeURIComponent(chain || "")}`;

        return {
            props: {
                ogData: {
                    url: `${FRONT_END_DOMAIN}/explore/collection/${itemCollection}`,
                    imgUrl: ogImageUrl,
                    title: name,
                    description: description,
                },
            },
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        return {
            props: {
                ogData: {
                    url: "",
                    imgUrl: "",
                    title: "",
                    description: "Failed to fetch data",
                },
                error: "Failed to fetch data.",
            },
        };
    }
}

const Index = () => {
    return (
        <>
            <PublicProfile>
                <CollectionDetailComponent />
            </PublicProfile>
        </>
    );
};

export default Index;
