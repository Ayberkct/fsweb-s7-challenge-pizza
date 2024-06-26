import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SizeContainer = styled.div`
  flex: 1;
  text-align: left;
`;

const DoughContainer = styled.div`
  flex: 1;
  text-align: right;
`;

const CheckboxContainer = styled.div`
  margin-bottom: 16px;
`;

const RoundCheckboxInput = styled.input`
  width: 20px;
  height: 20px;
  appearance: none;
  background-color: #fff;
  border: 2px solid #ccc;
  border-radius: 50%;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
  display: inline-block;
  vertical-align: middle;
  margin-right: 8px;
  &:checked {
    background-color: #007bff;
    border-color: #007bff;
  }
  &:checked::after {
    content: "\u2714";
    color: #fff;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    display: block;
  }
`;

const Label = styled.label`
  font-size: 16px;
  color: #333;
`;

const SelectContainer = styled.div`
  margin-bottom: 16px;
  text-align: center;
`;

const SelectInput = styled.select`
  width: auto;
  height: 2rem;
  padding: 5px;
  font-size: 16px;
`;

const Required = styled.span`
  color: #ce2829;
  margin-left: 4px;
`;

const ToppingsContainer = styled.div`
  margin-top: 12rem;
  position: absolute;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 586px;
`;

const PizzaOrderForm = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedDough, setSelectedDough] = useState("");
  const [selectedToppings, setSelectedToppings] = useState([]);

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleDoughChange = (event) => {
    setSelectedDough(event.target.value);
  };

  const handleToppingChange = (event) => {
    const topping = event.target.value;
    if (event.target.checked) {
      setSelectedToppings([...selectedToppings, topping]);
    } else {
      setSelectedToppings(selectedToppings.filter((item) => item !== topping));
    }
  };

  const toppings = [
    "Pepperoni",
    "Sosis",
    "Kanada Jambonu",
    "Tavuk Izgara",
    "Soğan",
    "Domates",
    "Mısır",
    "Sucuk",
    "Jalepeno",
    "Sarımsak",
    "Biber",
    "Ananas",
    "Kabak",
  ];

  return (
    <Container>
      <SizeContainer>
        <h2>
          Boyut Seç <Required>*</Required>
        </h2>
        {["Küçük", "Orta", "Büyük"].map((size) => (
          <CheckboxContainer key={size}>
            <RoundCheckboxInput
              type='checkbox'
              id={size.toLowerCase()}
              value={size}
              checked={selectedSize === size}
              onChange={handleSizeChange}
            />
            <Label htmlFor={size.toLowerCase()}>{size}</Label>
          </CheckboxContainer>
        ))}
      </SizeContainer>

      <DoughContainer>
        <SelectContainer>
          <h2>
            Hamur Seç <Required>*</Required>
          </h2>
          <SelectInput value={selectedDough} onChange={handleDoughChange}>
            <option value=''>Hamur Kalınlığı Seçin</option>
            {["İnce", "Normal", "Kalın"].map((dough) => (
              <option key={dough} value={dough}>
                {dough}
              </option>
            ))}
          </SelectInput>
        </SelectContainer>
      </DoughContainer>

      <ToppingsContainer>
        <h2>Ek Malzemeler Seçin (En Fazla 10 Adet)</h2>
        {toppings.map((topping) => (
          <CheckboxContainer key={topping}>
            <RoundCheckboxInput
              type='checkbox'
              id={topping.toLowerCase()}
              value={topping}
              checked={selectedToppings.includes(topping)}
              onChange={handleToppingChange}
            />
            <Label htmlFor={topping.toLowerCase()}>{topping}</Label>
          </CheckboxContainer>
        ))}
      </ToppingsContainer>
    </Container>
  );
};

export default PizzaOrderForm;
