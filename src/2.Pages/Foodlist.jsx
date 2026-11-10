import React, { useState } from "react";
import "../3.Styles/FoodList.scss";

const FoodList = () => {

  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("foodItems") || "[]")
  );

  // Get logged-in user
  const user = JSON.parse(
    localStorage.getItem("loggedInUser") || "null"
  );

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [editId, setEditId] = useState(null);

  const [editFood, setEditFood] = useState({
    name: "",
    category: "",
    quantity: "",
    location: "",
    image: "",
    description: ""
  });

  // Check Food Ownership
  function isOwner(item) {

    return (
      user &&
      user.email &&
      item.donorEmail &&
      user.email.toLowerCase() ===
      item.donorEmail.toLowerCase()
    );
  }

  // Delete Food
  function handleDelete(id) {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this food?"
    );

    if (!confirmDelete) return;

    const updatedData = data.filter((item) => {

      if (item.id === id && isOwner(item)) {
        return false;
      }

      return true;
    });

    setData(updatedData);

    localStorage.setItem(
      "foodItems",
      JSON.stringify(updatedData)
    );

    alert("Food deleted successfully!");
  }

  // Mark Food as Donated
  function handleDonate(id) {

    const updatedData = data.map((item) => {

      if (item.id === id && isOwner(item)) {

        return {
          ...item,
          status: "Donated"
        };

      }

      return item;
    });

    setData(updatedData);

    localStorage.setItem(
      "foodItems",
      JSON.stringify(updatedData)
    );

    alert("Food marked as donated successfully!");
  }

  // Open Edit Form
  function handleEdit(item) {

    if (!isOwner(item)) {
      alert("You can only edit your own donations!");
      return;
    }

    setEditId(item.id);

    setEditFood({
      name: item.name,
      category: item.category,
      quantity: item.quantity,
      location: item.location,
      image: item.image,
      description: item.description
    });
  }

  // Handle Edit Input Changes
  function handleEditChange(e) {

    setEditFood({
      ...editFood,
      [e.target.name]: e.target.value
    });
  }

  // Update Food
  function handleUpdate(e) {

    e.preventDefault();

    const updatedData = data.map((item) => {

      if (item.id === editId && isOwner(item)) {

        return {
          ...item,
          ...editFood
        };

      }

      return item;
    });

    setData(updatedData);

    localStorage.setItem(
      "foodItems",
      JSON.stringify(updatedData)
    );

    setEditId(null);

    alert("Food updated successfully!");
  }

  // Search and Category Filter
  const filteredData = data.filter((item) => {

    const searchMatch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const categoryMatch =
      category === "" || item.category === category;

    return searchMatch && categoryMatch;
  });

  return (

    <div className="foodlist">

      <h1>Available Food</h1>

      {/* Search */}

      <input
        type="text"
        placeholder="Search Food..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Category Filter */}

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >

        <option value="">All Categories</option>
        <option value="Vegetarian">Vegetarian</option>
        <option value="Non-Vegetarian">Non-Vegetarian</option>
        <option value="Fruits">Fruits</option>
        <option value="Bakery">Bakery</option>

      </select>

      {/* Food Cards */}

      <div className="food-container">

        {filteredData.length > 0 ? (

          filteredData.map((item) => (

            <div className="food-card" key={item.id}>

              <img
                src={item.image}
                alt={item.name}
              />

              {editId === item.id ? (

                // Edit Form

                <form
                  onSubmit={handleUpdate}
                  className="edit-form"
                >

                  <h2>Edit Food Details</h2>

                  <input
                    type="text"
                    name="name"
                    placeholder="Food Name"
                    value={editFood.name}
                    onChange={handleEditChange}
                    required
                  />

                  <select
                    name="category"
                    value={editFood.category}
                    onChange={handleEditChange}
                    required
                  >

                    <option value="">Select Category</option>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Non-Vegetarian">Non-Vegetarian</option>
                    <option value="Fruits">Fruits</option>
                    <option value="Bakery">Bakery</option>

                  </select>

                  <input
                    type="text"
                    name="quantity"
                    placeholder="Quantity"
                    value={editFood.quantity}
                    onChange={handleEditChange}
                    required
                  />

                  <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={editFood.location}
                    onChange={handleEditChange}
                    required
                  />

                  <input
                    type="url"
                    name="image"
                    placeholder="Image URL"
                    value={editFood.image}
                    onChange={handleEditChange}
                    required
                  />

                  <textarea
                    name="description"
                    placeholder="Description"
                    value={editFood.description}
                    onChange={handleEditChange}
                    required
                  />

                  <button
                    type="submit"
                    className="save-btn"
                  >
                    Save Changes
                  </button>

                  <button
                    type="button"
                    className="cancel-btn"
                    onClick={() => setEditId(null)}
                  >
                    Cancel
                  </button>

                </form>

              ) : (

                // Display Food Details

                <>

                  <h2>{item.name}</h2>

                  <p>Category: {item.category}</p>

                  <p>Quantity: {item.quantity}</p>

                  <p>Location: {item.location}</p>

                  <p>{item.description}</p>

                  <p>
                    Donated By: {item.donorName || "Unknown"}
                  </p>

                  {/* Food Status */}

                  <p className={`status ${
                    item.status === "Donated"
                      ? "donated"
                      : "available"
                  }`}>

                    {item.status || "Available"}

                  </p>

                  {/* Owner Permissions */}

                  {isOwner(item) && (

                    <>

                      {/* Mark as Donated */}

                      {item.status !== "Donated" && (

                        <button
                          className="donate-btn"
                          onClick={() => handleDonate(item.id)}
                        >
                          Mark as Donated
                        </button>

                      )}

                      {/* Edit Button */}

                      <button
                        className="edit-btn"
                        onClick={() => handleEdit(item)}
                      >
                        Edit
                      </button>

                      {/* Delete Button */}

                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>

                    </>

                  )}

                </>

              )}

            </div>

          ))

        ) : (

          <h2>No Food Available</h2>

        )}

      </div>

    </div>

  );

};

export default FoodList;