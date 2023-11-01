import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, editItem } from "./crudSlice";

const ItemList = () => {
    const [updatedItemName, setUpdatedItemName] = useState("");
    const [editItemId, setEditItemId] = useState(null);

    const items = useSelector((state) => state.crudTest.items);
    const dispatch = useDispatch();

    const handleEdit = (item) => {
        setEditItemId(item.id);
        setUpdatedItemName(item.itemName);
    };

    const handleUpdate = (item) => {
        if (updatedItemName.trim() === "") {
            alert("Please enter a valid item name.");
            return;
        }

        dispatch(editItem({ id: item.id, itemName: updatedItemName }));
        setEditItemId(null);
        setUpdatedItemName("");
    };

    const handleDelete = (id) => {
        dispatch(deleteItem(id));
    };

    return (
        <ul>
            {items.map((item) => (
                <li key={item.id}>
                    {editItemId === item.id ? (
                        <div>
                            <input
                                type="text"
                                value={updatedItemName}
                                onChange={(e) => setUpdatedItemName(e.target.value)}
                            />
                            <button onClick={() => handleUpdate(item)}>Save</button>
                        </div>
                    ) : (
                        <div>
                            {item.itemName}
                            <button onClick={() => handleEdit(item)}>Edit</button>
                            <button onClick={() => handleDelete(item.id)}>Delete</button>
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default ItemList;
