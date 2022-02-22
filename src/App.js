import logo from "./logo.svg";
import "./App.css";
import {
  FormControl,
  FormLabel,
  Grid,
  MenuItem,
  Paper,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useForm } from "react-hook-form";
import { Select } from "@mui/material";

const useStyles = makeStyles({
  root: {
    paddingTop: "50px",
    paddingLeft: "64px",
    height: "677px",
  },
  formControl: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "37px",
  },
  formControlArea: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "37px",
  },
  formLabel: {
    color: "var(--color-primary)",
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "20px",
    width: "170px",
    height: "20px",
    textAlign: "left",
  },
  formInput: {
    width: "343px",
    height: "48px",
    textAlign: "start",
    color: "var(--color-primary)",
    fontSize: "16px",
    lineHeight: "24px",
  },
  formInputArea: {
    width: "343px",
    minHeight: "128px",
    textAlign: "start",
    color: "var(--color-primary)",
    fontSize: "16px",
    lineHeight: "24px",
    border: "1px solid var(--color-secondary)",
    padding: "12px 16px 28px 16px",
    fontSize: "16px",
    lineHeight: "24px",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "normal",
  },
});

function App() {
  const classes = useStyles();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className='App'>
      <Paper className={classes.root}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container>
            <Grid
              item
              container
              xs={12}
              rowSpacing={5}
              columSpacing={{ xs: 4 }}
            >
              <Grid item xs={6} className={classes.formControl}>
                <label className={classes.formLabel}>
                  Loại lịch hẹn <span sx={{ color: "red" }}>*</span>
                </label>
                <Select
                  className={classes.formInput}
                  {...register("loaiLichHen")}
                  placeholder='Loại lịch hẹn'
                  defaultValue={10}
                >
                  <MenuItem value={10}>Đi xem nhà</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={6} className={classes.formControl}>
                <label className={classes.formLabel}>Mã sản phẩm</label>
                <TextField
                  className={classes.formInput}
                  {...register("maSP")}
                  placeholder='Mã sản phẩm'
                />
              </Grid>
              <Grid item xs={6} className={classes.formControl}>
                <label className={classes.formLabel}>Tiêu đề</label>
                <TextField
                  className={classes.formInput}
                  {...register("tieuDe")}
                  placeholder='Tiêu đề'
                />
              </Grid>
              <Grid item xs={6} className={classes.formControl}>
                <label className={classes.formLabel}>Vị trí</label>
                <TextField
                  className={classes.formInput}
                  {...register("viTri")}
                  placeholder='Vị trí'
                />
              </Grid>
              <Grid item xs={6} className={classes.formControl}>
                <label className={classes.formLabel}>Ngày bắt đầu</label>
                <TextField
                  className={classes.formInput}
                  {...register("ngayBatDau")}
                  defaultValue='2017-05-24T10:30'
                  type='datetime-local'
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={6} className={classes.formControl}>
                <label
                  className={classes.formLabel}
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <span>Mã nhân viên</span>
                  <span>(đi cùng)</span>
                </label>
                <TextField
                  className={classes.formInput}
                  {...register("maNhanVien")}
                  defaultValue='E004'
                />
              </Grid>
              <Grid item container xs={6} className={classes.formControl}>
                <Grid item xs={12} className={classes.formControl}>
                  <label className={classes.formLabel}>Mã Khách hàng</label>
                  <TextField
                    className={classes.formInput}
                    {...register("maKhachHang")}
                    placeholder='Mã Khách hàng'
                  />
                </Grid>

                <Grid item xs={12} className={classes.formControl}>
                  <label className={classes.formLabel}>Mã Khách hàng</label>
                  <TextField
                    className={classes.formInput}
                    {...register("maKhachHang")}
                    placeholder='Mã Khách hàng'
                  />
                </Grid>
              </Grid>
              <Grid item xs={6} className={classes.formControlArea}>
                <label className={classes.formLabel}>Ghi chú</label>
                <TextareaAutosize
                  className={classes.formInputArea}
                  {...register("ghiChu")}
                  maxRows={4}
                />
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  );
}

export default App;
