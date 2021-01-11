import { combineReducers } from "redux";

import stateUrl from "./Url/reducerUrl";

import stateStyle from "./Style/reducerStyle";

import stateBasisReport from "./BasisReport/reducers/reducerBasisReport";
import stateFlagsBasisReport from "./BasisReport/reducers/reducerFlagsBasisReport";
import focusData from "./BasisReport/reducers/reducerFocusData";

import stateUser from "./User/reducers/reducerUser";
import stateInputEditWindowUser from "./User/reducers/reducerEditWindowUser";
import stateCompareUser from "./User/reducers/reducerCompareUser";
import stateLinksUser from "./User/reducers/reducerLinksUser";
import stateFlagsUser from "./User/reducers/reducerFlagsUser";

import stateTableEltypeClass from "./EltypeClass/reducers/reducerEltypeClass";
import createDataEltypeClass from "./EltypeClass/reducers/reducerEltypeClassEditWindow";
import stateFlagsEltypeClass from "./EltypeClass/reducers/reducerFlagsEltypeClass";
import compareDataEltypeClass from "./EltypeClass/reducers/reducerCompareEltypeClass";
import stateLinksEltypeClass from "./EltypeClass/reducers/reducerLinksEltypeClass";

import stateFlagsAll from "./Flags/reducerFlags";
import stateDescription from "./Description/reducerDescription";

import stateAuthorization from "./Authorization/reducerAuthorization";


const rootReducer = combineReducers({
    stateUrl,
    stateStyle,
    stateAuthorization,
    stateBasisReport,
    stateFlagsBasisReport,
    focusData,
    stateUser,
    stateInputEditWindowUser,
    stateCompareUser,
    stateLinksUser,
    stateFlagsUser,
    stateTableEltypeClass,
    createDataEltypeClass,
    stateFlagsEltypeClass,
    compareDataEltypeClass,
    stateLinksEltypeClass,
    stateFlagsAll,
    stateDescription

})

export default rootReducer