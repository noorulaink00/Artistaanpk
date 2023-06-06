import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  sellerLevel: Yup.string().required("Seller level required"),
  vendorname: Yup.string().required("First Name is required"),
  contact: Yup.string().required("Phone is required"),
  cnic: Yup.string().required("Cnic is required"),
  address: Yup.string().required("Address is required"),
  shopName: Yup.string().required("Shop Name is required"),
  city: Yup.string().required("City is required"),
  area: Yup.string().required("Area is required"),
  address: Yup.string().required("Complete Address is required"),
  description: Yup.string().required("Shop Description is required"),
});

export default validationSchema;
