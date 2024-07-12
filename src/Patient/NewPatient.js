import React, { useState } from "react";
import axios from "axios";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
const NewPatient = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    dob: "",
    genderidentity: "",
    address1: "",
    contactmobilephone: "",
    email: "",
    departmentid: "",
    workPhone: "",
    zip: "",
    povertylevelfamilysize: "",
    // incomeLevel: "",
    veteran: "",
    // employmentStatus: "",
    //race and language from https://docs.athenahealth.com/api/api-ref/patient#Patient
    language6392code: "",
    race: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const formatDate = (date) => {
    const dateParts = date.split("-");
    return `${dateParts[1]}/${dateParts[2]}/${dateParts[0]}`; // Converts 'YYYY-MM-DD' to 'MM/DD/YYYY'
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedData = {
      ...formData,
      dob: formatDate(formData.dob), // Format the date before sending
    };

    try {
      const response = await axios.post(
        "http://localhost:5007/register",
        formattedData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      alert("Registration successful");
    } catch (error) {
      console.error(error);
      alert(
        "Registration failed: " +
          (error.response
            ? JSON.stringify(error.response.data)
            : "Unknown error")
      );
    }
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="space-y-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Patient Signup</h1>
          <p className="text-muted-foreground">
            Speed up your visit by filling out your information online.
          </p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstname ">First Name</Label>
              <Input
                className="bordered-xl"
                id="firstname"
                name="firstname"
                placeholder="John"
                value={formData.firstname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastname">Last Name</Label>
              <Input
                id="lastname"
                name="lastname"
                placeholder="Doe"
                value={formData.lastname}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="dob">Date of Birth</Label>
              <Input
                id="dob"
                name="dob"
                type="date"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="departmentid">Department</Label>
              <Select
                id="departmentid"
                name="departmentid"
                onValueChange={(value) =>
                  handleSelectChange("departmentid", value)
                }
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="family-medicine">
                    Family Medicine
                  </SelectItem>
                  <SelectItem value="internal-medicine">
                    Internal Medicine
                  </SelectItem>
                  <SelectItem value="pediatrics">Pediatrics</SelectItem>
                  <SelectItem value="obstetrics-gynecology">
                    Obstetrics &amp; Gynecology
                  </SelectItem>
                  <SelectItem value="surgery">Surgery</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Mobile Phone</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(123) 456-7890"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="workPhone">Work Phone</Label>
              <Input
                id="workPhone"
                name="workPhone"
                type="tel"
                placeholder="(123) 456-7890"
                value={formData.workPhone}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Textarea
                id="address"
                name="address"
                placeholder="123 Main St"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="zipCode">Zip Code</Label>
                <Input
                  id="zipCode"
                  name="zipCode"
                  placeholder="12345"
                  value={formData.zipCode}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="familySize">Family Size</Label>
                <Input
                  id="familySize"
                  name="familySize"
                  type="number"
                  min="1"
                  placeholder="2"
                  value={formData.familySize}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="incomeLevel">Income Level</Label>
              <Select
                id="incomeLevel"
                name="incomeLevel"
                onValueChange={(value) =>
                  handleSelectChange("incomeLevel", value)
                }
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select income level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-25k">Under $25,000</SelectItem>
                  <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                  <SelectItem value="50k-75k">$50,000 - $75,000</SelectItem>
                  <SelectItem value="75k-100k">$75,000 - $100,000</SelectItem>
                  <SelectItem value="over-100k">Over $100,000</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="veteranStatus">Veteran Status</Label>
              <Select
                id="veteranStatus"
                name="veteranStatus"
                onValueChange={(value) =>
                  handleSelectChange("veteranStatus", value)
                }
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select veteran status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="employmentStatus">Employment Status</Label>
              <Select
                id="employmentStatus"
                name="employmentStatus"
                onValueChange={(value) =>
                  handleSelectChange("employmentStatus", value)
                }
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select employment status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="employed">Employed</SelectItem>
                  <SelectItem value="unemployed">Unemployed</SelectItem>
                  <SelectItem value="retired">Retired</SelectItem>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="preferredLanguage">Preferred Language</Label>
              <Select
                id="preferredLanguage"
                name="preferredLanguage"
                onValueChange={(value) =>
                  handleSelectChange("preferredLanguage", value)
                }
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select preferred language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="spanish">Spanish</SelectItem>
                  <SelectItem value="mandarin">Mandarin</SelectItem>
                  <SelectItem value="arabic">Arabic</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="raceEthnicity">Race/Ethnicity</Label>
            <Select
              id="raceEthnicity"
              name="raceEthnicity"
              onValueChange={(value) =>
                handleSelectChange("raceEthnicity", value)
              }
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select race/ethnicity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="white">White</SelectItem>
                <SelectItem value="black">Black or African American</SelectItem>
                <SelectItem value="hispanic">Hispanic or Latino</SelectItem>
                <SelectItem value="asian">Asian</SelectItem>
                <SelectItem value="native-american">
                  Native American or Alaska Native
                </SelectItem>
                <SelectItem value="pacific-islander">
                  Native Hawaiian or Pacific Islander
                </SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
};

export default NewPatient;
