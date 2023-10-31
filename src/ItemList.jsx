import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, editItem } from "./crudSlice";

const ItemList = () => {
    const [updatedItemName, setUpdatedItemName] = useState(null);
    const [updatableItemId, setUpdatableItemId] = useState(null);

    const items = useSelector((state) => state.crud.items);

    const dispatch = useDispatch();

    const handleEdit = (item) => {
        if (updatedItemName.trim() === "") {
            alert("Please provide a valid item name.");
            return;
        }

        dispatch(editItem({ id: item.id, name: updatedItemName }));
        setUpdatedItemName("");
        setUpdatableItemId(null);
    };

    const handleDelete = (id) => {
        dispatch(deleteItem(id));
    };

    return (
        <ul>
            {items.map((item) => (
                <li key={item.id}>
                    {item.itemName}
                    <button onClick={handleEdit}>Update</button>
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default ItemList;
