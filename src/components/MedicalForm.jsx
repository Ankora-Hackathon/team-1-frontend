import React, { useState } from "react";
import {
  Label,
  Radio,
  Select,
  Button, TextInput, RangeSlider, Textarea
} from "flowbite-react";
import { Form } from "react-router-dom";

const MedicalForm = () => {
  const [formValues, setFormValues] = useState({
    age: "",
    sex: "",
    chronicDisease: "",
    duration: "",
    intensity: "",
    medications: "",
    allergies: "",
    geneticDisease: "",
    description: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form values:", formValues);
    // Submit form values, e.g., to an API
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <Form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="mb-4">
          <Label htmlFor="age">Age</Label>
          <TextInput
            type="text"
            name="age"
            id="age"
            value={formValues.age}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <Label>Sex</Label>
          <div className="flex items-center space-x-4">
            <Radio
              label="Male"
              name="sex"
              value="male"
              id="male"
              checked={formValues.sex === "male"}
              onChange={handleChange}
            />
            <Radio
              label="Female"
              name="sex"
              value="female"
              id="female"
              checked={formValues.sex === "female"}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-4">
          <Label htmlFor="chronicDisease">Chronic Disease</Label>
          <Select
            name="chronicDisease"
            id="chronicDisease"
            value={formValues.chronicDisease}
            onChange={handleChange}
          >
            <option value="">Choose...</option>
            {/* Add your options here */}
            <option value="diabetes">Diabetes</option>
            <option value="hypertension">Hypertension</option>
          </Select>
        </div>

        <div className="mb-4">
          <Label htmlFor="duration">Duration</Label>
          <TextInput
            type="text"
            name="duration"
            id="duration"
            value={formValues.duration}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="intensity">Intensity</Label>
          <RangeSlider
            name="intensity"
            id="intensity"
            min={1}
            max={3}
            step={1}
            value={formValues.intensity}
            onChange={handleChange}
          />
          <div className="flex justify-between">
            <span>Low</span>
            <span>Medium</span>
            <span>High</span>
          </div>
        </div>

        <div className="mb-4">
          <Label htmlFor="medications">Medications</Label>
          <TextInput
            type="text"
            name="medications"
            id="medications"
            value={formValues.medications}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="allergies">Allergies</Label>
          <TextInput
            type="text"
            name="allergies"
            id="allergies"
            value={formValues.allergies}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="geneticDisease">Genetic Disease</Label>
          <TextInput
            type="text"
            name="geneticDisease"
            id="geneticDisease"
            value={formValues.geneticDisease}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="description">Description</Label>
          <Textarea
            name="description"
            id="description"
            rows="4"
            value={formValues.description}
            onChange={handleChange}
          />
        </div>

        <div className="flex justify-end">
          <Button type="submit" color="primary">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default MedicalForm;

