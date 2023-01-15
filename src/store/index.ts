import { init, RematchDispatch, RematchRootState } from "@rematch/core";
import loadingPlugin, { ExtraModelsFromLoading } from "@rematch/loading";
import { models } from "../models";
// import storage from 'redux-persist/lib/storage'
import { RootModel } from "../models/models.types";

type FullModel = ExtraModelsFromLoading<RootModel>;

export const store = init<RootModel, FullModel>({
    models,
    plugins: [
        // @ts-ignore
        // persist({
        //     key: 'root',
        //     storage,
        //     whitelist: ['lang']
        // }),
        loadingPlugin(),
    ],
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel, FullModel>;
