export default function (state=null, action) {

    switch(action.type) {
        case "BRAND_SELECTED":
            return action.payload;
            break;
    }

    return state;

}