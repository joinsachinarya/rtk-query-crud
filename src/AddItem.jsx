import { useDispatch } from "react-redux";
import { addItem } from "./crudSlice";
import { useState } from "react";
import ItemList from "./ItemList";

const AddItem = () => {
    const [itemName, setItemName] = useState("");

    const dispatch = useDispatch();

    const handleAddItem = () => {
        if (itemName) {
            dispatch(addItem({ id: Date.now(), itemName }));
            setItemName("");
        } else {
            alert("Please enter something")
        }
    };
    return (
        <div className="App" style={{ border: "2px solid gray", width: "100%", height: "50vh", display: "flex", flexDirection: "column", flexWrap: "wrap", overflow: "scroll", overflowX: "hidden" }}>
            <h4>Create New Item : 👇</h4>
            <input
                type="text"
                onChange={(e) => setItemName(e.target.value)}
                value={itemName}
            />
            <button onClick={handleAddItem}>Add</button>
            <ItemList />
        </div>

    );
};
export default AddItem;
