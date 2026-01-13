import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const navigate = useNavigate();

  const initialValues = {
    phone: "",
    password: "",
  };

  useEffect(()=>{
   const token = localStorage.getItem("token")
   console.log(token)

   if(token){
    navigate("/")
   }
  },[])

  const validationSchema = Yup.object({
    phone: Yup.string()
      .min(10, "Phone must be at least 10 digits")
      .required("Phone is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const submitButton = async (values, { setSubmitting, setStatus }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/user/user-login",
        values,
        { withCredentials: true }
      );

      setStatus({ success: response.data.message });
      console.log(response.data.user.token)
      localStorage.setItem("token", response.data.user.token)
      navigate("/");
    } catch (error) {
      setStatus({ error: error.response?.data?.message || "Login failed" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          User Login
        </h2>

        <Formik
          initialValues={initialValues} // ✅ correct prop name
          validationSchema={validationSchema}
          onSubmit={submitButton}
        >
          {({ isSubmitting, status }) => (
            <Form className="space-y-4">
              {status?.error && (
                <p className="text-red-600 text-center">{status.error}</p>
              )}

              <div>
                <Field
                  name="phone"
                  type="text"
                  placeholder="Enter phone number"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
                <ErrorMessage
                  name="phone"
                  component="p"
                  className="text-red-500 text-sm"
                />
              </div>

              <div>
                <Field
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
                <ErrorMessage
                  name="password"
                  component="p"
                  className="text-red-500 text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default UserLogin;
