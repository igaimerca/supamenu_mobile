import { createStackNavigator } from '@react-navigation/stack';
import BookmarkScreen from '../screens/Bookmark';
import DashboardScreen from '../screens/Dashboard';
import NotificationScreen from '../screens/Notification';
import SearchScreen from '../screens/Search';
import ShoppingCartScreen from '../screens/ShoppingCart';
import SignInScreen from '../screens/SignIn';
import SignUpScreen from '../screens/SignUp';
import CheckoutScreen from '../screens/Checkout';
import RestaurantMenu from '../screens/RestaurantMenu';
import RestaurantMenuCart from '../screens/RestaurantMenuCart';
import colors from '../util/colors';
import ChooseRestaurant from '../screens/ChooseRestaurant';

const Stack = createStackNavigator();


const DashboardStack = ({ navigation }) => {
    return (
        <Stack.Navigator
            initialRouteName="Dashboard"
            screenOptions={{
                headerStyle: { backgroundColor: colors.green2 },
                headerTintColor: colors.white,
                headerTitleStyle: { fontWeight: 'bold' },
            }}
        >
            <Stack.Screen
                name="Dashboard"
                component={DashboardScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

const CheckoutStack = ({ navigation }) => {
    return (
        <Stack.Navigator
            initialRouteName="Checkout"
            screenOptions={{
                headerStyle: { backgroundColor: colors.green2 },
                headerTintColor: colors.white,
                headerTitleStyle: { fontWeight: 'bold' },
            }}
        >
            <Stack.Screen
                name="Checkout"
                component={CheckoutScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

const NotificationStack = ({ navigation }) => {
    return (
        <Stack.Navigator
            initialRouteName="Notification"
            screenOptions={{
                headerStyle: { backgroundColor: colors.green2 },
                headerTintColor: colors.white,
                headerTitleStyle: { fontWeight: 'bold' },
            }}
        >
            <Stack.Screen
                name="Notification"
                component={NotificationScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

const SearchStack = ({ navigation }) => {
    return (
        <Stack.Navigator
        initialRouteName="Search"
            screenOptions={{
                headerStyle: { backgroundColor: colors.green2 },
                headerTintColor: colors.white,
                headerTitleStyle: { fontWeight: 'bold' },
            }}
        >
            <Stack.Screen
                name="Search"
                component={SearchScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ChooseRestaurant"
                component={ChooseRestaurant}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="RestaurantMenu"
                component={RestaurantMenu}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="RestaurantMenuCart"
                component={RestaurantMenuCart}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

const BookmarkStack = ({ navigation }) => {
    return (
        <Stack.Navigator
            initialRouteName="Bookmark"
            screenOptions={{
                headerStyle: { backgroundColor: colors.green2 },
                headerTintColor: colors.white,
                headerTitleStyle: { fontWeight: 'bold' },
            }}
        >
            <Stack.Screen
                name="Bookmark"
                component={BookmarkScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

const ShoppingCartStack = ({ navigation }) => {
    return (
        <Stack.Navigator
            initialRouteName="ShoppingCart"
            screenOptions={{
                headerStyle: { backgroundColor: colors.green2 },
                headerTintColor: colors.white,
                headerTitleStyle: { fontWeight: 'bold' },
            }}
        >
            <Stack.Screen
                name="ShoppingCart"
                component={ShoppingCartScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export {
    DashboardStack,
    NotificationStack,
    SearchStack,
    BookmarkStack,
    ShoppingCartStack,
    CheckoutStack,
};
