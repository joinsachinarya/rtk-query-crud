import { useDispatch } from "react-redux";
import { addItem } from "./crudSlice";
import { useState } from "react";

const AddItem = () => {
    const [itemName, setItemName] = useState("");

    const dispatch = useDispatch();

    const handleAddItem = () => {
        dispatch(addItem({ id: Date.now(), itemName }));
        setItemName("");
    };
    return (
        <div className="App">
            <input
                type="text"
                onChange={(e) => setItemName(e.target.value)}
                value={itemName}
            />
            <button onClick={handleAddItem}>Add</button>
        </div>
    );
};
export default AddItem;
