import React from "react";
import Model from "./Model";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from "yup"

const constactSchemaValidation = Yup.object().shape(
 { name:Yup.string().required("Name is required"),
  email:Yup.string().email("Invalid email").required("email is required"),
}
)

const AddAndUpdateContact = ({ isOpen, onClosed, isUpdate, contact }) => {

  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contact");
      onClosed()
      await addDoc(contactRef, contact);
      toast.success("Contact Added Successfully")

    } catch (error) {
      console.log(error);
    }
  };

  const UpdateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contact", id);
      onClosed()
      await updateDoc(contactRef, contact);
      toast.success("Contact Updated Successfully")

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
    <Model isOpen={isOpen} onClose={onClosed}>
      <Formik
        validationSchema={constactSchemaValidation}
        initialValues={
          isUpdate
            ? {
                name: contact.name,
                email: contact.email,
              }
            : {
                name: "",
                email: "",
              }
        }
        onSubmit={(values) => {
          console.log(values);
          isUpdate ? UpdateContact(values, contact.id) : addContact(values);
        }}
      >
        <Form className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <Field name="name" className="h-10 border" />
            <div className=" text-xs text-red-500">
              <ErrorMessage name="name" />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <Field name="email" className="h-10 border" />
            <div className=" text-xs text-red-500">
              <ErrorMessage name="email" />
            </div>
          </div>

          <button className="self-end border bg-orange px-3 py-1.5">
            {isUpdate ? "update" : "add"} contact
          </button>
        </Form>
      </Formik>
    </Model>
  </div>
  );
};

export default AddAndUpdateContact;
