import {
    CHANGE_STYLE_SELECT
                    } from "./types";

const initialState = {
    styleSelect: 'Coffee',
    stylesAll: {
        Coffee: {
            app: 'App',
            home: 'Home',
            dataBaseContainer: 'DataBase__container',
            dataBaseHeaderConsole: "DataBase__header__console",
            rowTableBackground: "rgba(252, 249, 249, 1)",
            focusRowBackground: "rgb(217, 201, 192)",
            loading: "Loading",
            colorWarning: "rgb(172, 5, 5)",

            searchInputDatalisHeaderDataBase: 'searchInputDatalis_HeaderDataBase',
            inputFilterHeaderDataBase: 'input_Filter_HeaderDataBase',

            userRowTable: 'UserRowTable',
            eltypeClassRowTable: 'EltypeClassRowTable',
            viewTypeRowTable: 'ViewTypeRowTable',

            authorization: "Authorization",
            registration: "Registration",
            loginAuthChange: "LoginAuthChange",

            personalize: "Personalize",

            navigation: "Navigation",
            personalizeButton: "PersonalizeButton",
            navigationButtonLink: 'NavigationButtonLink',
            navigationLinkAbout: "NavigationLinkAbout",
            navigationWindowBlind: "NavigationWindowBlind",
            navigationToggle: 'NavigationToggle',

            warningValueNotSelected: 'WarningValueNotSelected',
            warningHelp: "WarningHelp",
            warningValueNotSelected: 'WarningValueNotSelected',
            buttonWarningHelp: "ButtonWarningHelp",
            buttonWarningComeBack: "ButtonWarningComeBack",

            wrapper: "Wrapper",
            windowConfirmDeleting: "WindowConfirmDeleting",

            windowEditWindow: "WindowEditWindow",

            beautifulCheckbox: 'beautifulCheckbox checkbox',
            beautifulCheckboxTable: 'beautifulCheckboxTable checkbox',

            consoleCountRow: 'ConsoleCountRow',
            descriptionButton: 'DescriptionButton',

            contextMenuWindow: 'ContextMenuWindow'

                },
        GreyBlue: {
            app: 'GB-App',
            home: 'GB-Home',
            dataBaseContainer: 'GB-DataBase__container',
            dataBaseHeaderConsole: "GB-DataBase__header__console",
            rowTableBackground: "rgb(233, 233, 239)",
            focusRowBackground: "linear-gradient(to top, rgba(113, 128, 177, 0.3), rgba(195, 195, 217, 0.4) 50%, rgba(113, 128, 177, 0.3))",
            loading: "GB-Loading",
            colorWarning: "rgb(190, 1, 8)",

            searchInputDatalisHeaderDataBase: 'GB-searchInputDatalis_HeaderDataBase',
            inputFilterHeaderDataBase: 'GB-input_Filter_HeaderDataBase',

            userRowTable: 'GB-UserRowTable',
            eltypeClassRowTable: 'GB-EltypeClassRowTable',
            viewTypeRowTable: 'GB-ViewTypeRowTable',

            authorization: "GB-Authorization",
            registration: "GB-Registration",
            loginAuthChange: "GB-LoginAuthChange",

            personalize: "GB-Personalize",

            navigation: "GB-Navigation",
            personalizeButton: "GB-PersonalizeButton",
            navigationButtonLink: 'GB-NavigationButtonLink',
            navigationLinkAbout: "GB-NavigationLinkAbout",
            navigationWindowBlind: "GB-NavigationWindowBlind",
            navigationToggle: 'GB-NavigationToggle',

            warningValueNotSelected: 'GB-WarningValueNotSelected',
            warningHelp: "GB-WarningHelp",
            warningValueNotSelected: 'GB-WarningValueNotSelected',
            buttonWarningHelp: "GB-ButtonWarningHelp",
            buttonWarningComeBack: "GB-ButtonWarningComeBack",

            wrapper: "GB-Wrapper",
            windowConfirmDeleting: "GB-WindowConfirmDeleting",

            windowEditWindow: "GB-WindowEditWindow",

            beautifulCheckbox: 'GB-beautifulCheckbox checkbox',
            beautifulCheckboxTable: 'GB-beautifulCheckboxTable checkbox',

            consoleCountRow: 'GB-ConsoleCountRow',
            descriptionButton: 'GB-DescriptionButton',

            contextMenuWindow: 'GB-ContextMenuWindow'
                },
        Black: {

                }
    }
};


const stateStyle = (state = initialState, action) => {

    switch (action.type) {

        case CHANGE_STYLE_SELECT:
            return {
                ...state,
                styleSelect: action.payload
            }
 
        default:
            return state;
    }
}
export default stateStyle