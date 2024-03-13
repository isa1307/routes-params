import StackRoutes from "./stack.routes";
import TabRoutes from "./tab.routes";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import DrawerRoutes from "./drawer.routes";

export default function Routes() {
    return (
        <NavigationContainer>
            <StatusBar style="auto" />
            {/* <StackRoutes /> */}
            {/*  <TabRoutes /> */}
            <DrawerRoutes />
        </NavigationContainer>
    );
}