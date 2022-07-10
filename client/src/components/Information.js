import React from "react";
import { useForm } from "react-hook-form";
import "./Information.css";

function Information(props) {
  const { cart } = props;

  const { register, handleSubmit } = useForm();

  console.log("====================================");
  console.log("Ordered items:", cart);
  console.log("====================================");

  const onSubmit = (userData) => {
    Object.assign(userData, { items: cart });
    try {
      fetch(`http://localhost:4000/buyers`, {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      }).then((response) => response.json());
      alert("Purchase sent successfully");
      window.location.reload(false);
    } catch (error) {
      console.log("Error making a POST request to DB");
    }
  };

  return (
    <div className="info_app">
      <h1 className="info_h1">Customer Information</h1>
      <form className="info_form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input className="info_input" {...register("name")} />
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input className="info_input" {...register("surname")} />
        </div>

        <div>
          <label htmlFor="address">Address</label>
          <input
            className="info_input"
            type="address"
            {...register("address")}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input className="info_input" type="email" {...register("email")} />
        </div>
        <input className="button_info" type="submit" />
      </form>
    </div>
  );
}

export default Information;
