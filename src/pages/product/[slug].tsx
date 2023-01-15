import type { NextPage } from "next";
import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Button } from "@mui/material";
import {
    SectionContainerType1,
    SectionContainerType2,
} from "../../components/SectionContainer";
import SellersContainer from "../../containers/SellersContainer";

const ProductPage: NextPage = () => {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <div className="bg-neutral-bg2 pt-12">
            <SectionContainerType1>
                <div className="grid grid-cols-2 gap-6">
                    <div className="col-span-1">
                        <SectionContainerType2>1</SectionContainerType2>
                    </div>
                    <div className="col-span-1">
                        <SectionContainerType2>
                            <SellersContainer
                                title="Best Sellers"
                                variant={1}
                                filterByOptions={["price", "date"]}
                                filteredBy="price"
                                handleChangeFilter={() => {}}
                            >
                                <div className="flex flex-row justify-between bg-neutral-bg2 rounded-[20px] p-10">
                                    <div className="flex flex-row gap-4 items-center">
                                        <Image
                                            src="/images/sample/seller-logo.png"
                                            width={64}
                                            height={64}
                                            layout="fixed"
                                            className="rounded-full"
                                        />
                                        <div>
                                            <div>Iphone 13 Pro Max</div>
                                            <div>BestBuy</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row">
                                        <div>price</div>
                                        <div>
                                            <Button
                                                className="shadow-[unset]"
                                                variant="contained"
                                                color="info"
                                            >
                                                Visit Shop
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </SellersContainer>
                        </SectionContainerType2>
                    </div>
                    <div className="col-span-2">
                        <SectionContainerType2>3</SectionContainerType2>
                    </div>
                </div>
            </SectionContainerType1>
        </div>
    );
};

export default ProductPage;
