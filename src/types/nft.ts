import { CollectionIDs, OtherCollectionIDs } from "../constants/Collections";

export type TNFT = {
	token_id: string;
	collectionId: CollectionIDs | OtherCollectionIDs;
};
