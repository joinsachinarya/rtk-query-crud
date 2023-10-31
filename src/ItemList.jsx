import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, editItem } from "./crudSlice";

const ItemList = () => {
    const [updatedItemName, setUpdatedItemName] = useState("");
    const [updateableItemId, setUpdateableItemId] = useState(null);

    const items = useSelector((state) => state.crud.items);

    const dispatch = useDispatch();

    const handleEdit = (item) => {
        if (updatedItemName.trim() === "") {
            alert("Please provide a valid item name.");
            return;
        }

        dispatch(editItem({ id: item.id, name: updatedItemName }));
        setUpdatedItemName("");
        setUpdateableItemId(null);
    };

    const handleDelete = (id) => {
        dispatch(deleteItem(id));
    };

    return (
        <ul>
            {items.map((item) => (
                <li key={item.id}>
                    {updateableItemId === item.id ? (
                        <div>
                            <input
                                type="text"
                                value={updatedItemName}
                                onChange={(e) => setUpdatedItemName(e.target.value)}
                            />
                            <button onClick={() => handleEdit(item)}>Update</button>
                            <button onClick={() => handleDelete(item.id)}>Delete</button>
                        </div>
                    ) : (
                        <div>
                            {item.name}
                            <button onClick={() => setUpdateableItemId(item.id)}>Edit</button>
                            <button onClick={() => handleDelete(item.id)}>Delete</button>
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default ItemList;
