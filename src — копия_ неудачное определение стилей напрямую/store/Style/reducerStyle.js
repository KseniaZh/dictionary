import {
    CHANGE_STYLE_SELECT
                    } from "./types";

const initialState = {
    styleSelect: 'Coffee',
    stylesAll: {
             Coffee: {
                    dataBaseContainer: 'DataBase__container',
                    dataBaseHeaderContainer: "DataBase__header__container",
                    dataBaseHeaderConsole: "DataBase__header__console",
                    dataBaseHeaderHeader: "DataBase__header__header",
                    dataBaseTableContainer: "DataBase__table__container",
                    consoleCountRow: 'ConsoleCountRow',
                    personalizeButton: "PersonalizeButton",
                    descriptionButton: 'DescriptionButton',
                    rowTableBackground: "rgba(252, 249, 249, 1)",
                    focusRowBackground: "rgb(217, 201, 192)",
                    personalize: "Personalize",
                    navigation: "Navigation",
                    personalizeButton: "PersonalizeButton",
                    navigationButtonLink: 'NavigationButtonLink',
                    navigationLinkAbout: "NavigationLinkAbout",
                    navigationWindowBlind: "NavigationWindowBlind",
                    navigationToggle: 'NavigationToggle',
                    loading: "Loading",
                    warningValueNotSelected: 'WarningValueNotSelected',
                    warningHelp: "WarningHelp",
                    buttonWarningHelp: "ButtonWarningHelp",
                    buttonWarningComeBack: "ButtonWarningComeBack",
                    wrapper: "Wrapper",
                    windowConfirmDeleting: "WindowConfirmDeleting",
                    warningValueNotSelected: 'WarningValueNotSelected',
                    windowEditWindow: "WindowEditWindow",
            beautifulCheckbox: 'beautifulCheckbox checkbox',
            beautifulCheckboxTable: 'beautifulCheckboxTable checkbox',
            searchInputDatalisHeaderDataBase: 'searchInputDatalis_HeaderDataBase',
            userRowTable: 'UserRowTable'



                },
                GreyBlue: {

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