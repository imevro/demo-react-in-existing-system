import React from "react";
import ReactDOM from "react-dom";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

function PropertyCard(props) {
  return (
    <a href={`/properties/${props.data.id}`}>
      № квартиры: {props.data.id}, цена: {props.data.price}
    </a>
  );
}

function PropertiesList(props) {
  return (
    <section>
      <h2>Список квартир в ЖК {props.name}</h2>

      {props.properties.map(data => <PropertyCard data={data} />)}
    </section>
  );
}

ReactDOM.render(
  <PropertiesList properties={window.properties || []} />,
  document.getElementById("react-properties-list")
);
ReactDOM.render(<DayPicker />, document.getElementById("react-daypicker"));
