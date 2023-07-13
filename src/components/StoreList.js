import React from "react"
import Store from "./Store"

function StoreList({stores}) {

    const storeDetails = stores.map(store => {
        return <Store store={store} key={store.id} />
    })


    return(
        <table>
            <tbody>
                <tr>
                    <th className="row-name">
                        Name
                    </th>
                    <th>
                        Image
                    </th>
                    <th>
                        Season
                    </th>
                    <th>
                        Episode
                    </th>
                </tr>
                {storeDetails}
            </tbody>
        
        </table>
    );
}

export default StoreList;