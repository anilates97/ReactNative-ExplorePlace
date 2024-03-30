import { RootStackParamsList } from "../App";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamsList {}
  }
}

export type RouteParams = RouteProp<
  //   { FoodOverview: { categoryId: string } },
  //   { FoodDetail: { foodId: string } }
>;
