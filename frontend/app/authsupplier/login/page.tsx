import { LogoTransparent, RegisterImage } from "@/src/utils/images/images";
import { Grid } from "@mui/material";
import Image from "next/image";

const Login = () => {
  return (
    <Grid container spacing={2} className="md:pl-2">
      <Grid item xs={12} md={4} lg={3.5}></Grid>
      <Grid
        item
        xs={12}
        md={4}
        lg={5}
        className="h-screen flex flex-col items-center justify-center"
      >
        <form className="shadow-4xl px-5 py-10 border border-white rounded-2xl">
          <Grid container>
            <Grid item xs={12} md={12}>
              <div className="flex flex-col items-start justify-start">
                <Image
                  src={LogoTransparent}
                  className="object w-20 ml-3"
                  alt="Registration Image"
                />
                <h1 className="text-2xl font-semibold pl-8 pt-2">
                  Supplier Login
                </h1>
              </div>
            </Grid>
          </Grid>
          <Grid container className="px-8 py-4" spacing={3}>
            <Grid item xs={12}>
              <div className="form-group">
                <label className="mb-2 text-sm font-medium font-mont text-[#344054]">
                  Email*
                </label>
                <br />
                <input
                  className="w-full border-solid border py-2 border-opacity-20 pl-2 rounded-lg border-black-variant bg-[#FBFBFB] outline-none"
                  type="text"
                  placeholder="Email"
                />
              </div>
            </Grid>

            <Grid item xs={12}>
              <div className="form-group">
                <label className="mb-2 text-sm font-medium font-mont text-[#344054]">
                  Password*
                </label>
                <br />
                <input
                  className="w-full border-solid border py-2 border-opacity-20 pl-2 rounded-lg border-black-variant bg-[#FBFBFB] outline-none"
                  type="text"
                  placeholder="Password"
                />
              </div>
            </Grid>

            <Grid item xs={12} md={6}>
              <div className="form-group">
                <button className="bg-[#FFA500] text-white font-mont text-base px-4 py-2 rounded-md mt-4">
                  Login Now
                </button>
              </div>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Grid item xs={12} md={4} lg={3.5}></Grid>
    </Grid>
  );
};

export default Login;
