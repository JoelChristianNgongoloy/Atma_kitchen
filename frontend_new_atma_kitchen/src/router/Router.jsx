import {
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Toaster } from "react-hot-toast";

import AdminLayout from "../layouts/AdminLayout";
import WelcomeAdmin from "../pages/Admin/WelcomeAdmin";
import ProdukAdmin from "../pages/Admin/ProdukByAdmin/ProdukAdmin";
import HampersAdmin from "../pages/Admin/HampersByAdmin/HampersAdmin";
import DetailHampers from "../pages/Admin/HampersByAdmin/DetailHampers";
import ResepAdmin from "../pages/Admin/ResepByAdmin/ResepAdmin";
import DetailResep from "../pages/Admin/ResepByAdmin/DetailResep";
import BahanBakuAdmin from "../pages/Admin/BahanBakuByAdmin/BahanBakuAdmin";
import ListCustomer from "../pages/Admin/ListCustomerByAdmin/ListCustomer";
import InputJarak from "../pages/Admin/InputJarakByAdmin/InputJarak";
import KonfirmasiPesanan from "../pages/Admin/KonfirmasiPesananByAdmin/KonfirmasiPesanan";
import KonfirmasiPenarikan from "../pages/Admin/SaldobyAdmin/KonfirmasiPenarikan";
import LaporanPenjualanBulanan from "../pages/Owner/LaporanPenjualanBulanan";
import LaporanPenjualanBulananMo from "../pages/Mo/LaporanPenjualanBulananMo";

import Register from "../pages/Register";
import Login from "../pages/Login";

import MoLayout from "../layouts/MoLayout";
import WelcomeMo from "../pages/Mo/WelcomeMo";
import PegawaiMo from "../pages/Mo/PegawaiByMo/PegawaiMo";
import PenitipMo from "../pages/Mo/PenitipByMo/PenitipMo";
import PengeluaranMo from "../pages/Mo/PengeluaranByMo/PengeluaranMo";
import PembelianMo from "../pages/Mo/PembelianByMo/PembelianMo";
import PesananMo from "../pages/Mo/PesananByMo/PesananMo";
import LaporanPresensiGaji from "../pages/Mo/Laporan/LaporanPresensiGaji";
import LaporanPengeluaranPemasukkan from "../pages/Mo/Laporan/LaporanPengeluaranPemasukkan";
import LaporanTransaksiPenitip from "../pages/Mo/Laporan/LaporanTransaksiPenitip";

import OwnerLayout from "../layouts/OwnerLayout";
import WelcomeOwner from "../pages/Owner/WelcomeOwner";
import GajiOwner from "../pages/Owner/GajiByOwner/GajiOwner";
import CustomerLayout from "../layouts/CustomerLayout";
import ProfilCustomer from "../pages/Customer/ProfilCustomer/ProfilCustomer";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/Customer/HomeCustomer/HomePage";
import CatalogPage from "../pages/Customer/CatalogCustomer/CatalogPage";
import ProdukInformation from "../pages/Customer/CatalogCustomer/ComponenCatalog/ProdukInformation/ProdukInformation";
import KuotaIndex from "../pages/Admin/ProdukByAdmin/KuotaIndex";
import ProdukInformationDate from "../pages/Customer/CatalogCustomer/ComponenCatalog/ProdukInformation/ProdukInformationDate";
import DetailPesanan from "../pages/Customer/CatalogCustomer/ComponenCatalog/Pesanan/DetailPesanan";
import Transaksi from "../pages/Customer/CatalogCustomer/ComponenCatalog/Pesanan/Transaksi";
import KeranjangUser from "../pages/Customer/CatalogCustomer/ComponenCatalog/KeranjangUser";
import DetailPesananByKeranjang from "../pages/Customer/CatalogCustomer/ComponenCatalog/Pesanan/DetailPesananByKeranjang";
import AlamatInput from "../pages/Customer/CatalogCustomer/ComponenCatalog/Pesanan/AlamatInput";
import TampilPesanan from "../pages/Customer/CatalogCustomer/ComponenCatalog/Pesanan/TampilPesanan";
import DaftarPesananMo from "../pages/Mo/DaftarPesananByMo/DaftarPesananMo";
import TampilPesananaByBulanTahun from "../pages/Mo/TampilPesanan/TampilPesananaByBulanTahun";
import LaporanPesanan from "../pages/Owner/PesananOwner/LaporanPesanan";
import LaporanBahanBaku from "../pages/Owner/PencatatanBahan/LaporanBahanBaku";
// import KuotaIndex from "../pages/Admin/HampersByAdmin/KuotaIndex";
import UpdateStatus from "../pages/Admin/UpdateStatusByAdmin/UpdateStatus";
import UpdateSelesaikanPesanan from "../pages/Admin/UpdateStatusByAdmin/UpdateSelesaikanPesanan";
import PembatalanPesanan from "../pages/Admin/PembatalanByAdmin/PembatalanPesanan";
import KonfirmasiPesananByCustomer from "../pages/Customer/KonfirmasiPesanan/KonfirmasiPesananByCustomer";
import LaporanPenggunaanBahanBakuMo from "../pages/Mo/LaporanPenggunaanBahanBakuMo";

const router = createBrowserRouter([
  {
    path: "*",
    element: <div>Routes Not Found</div>,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin",
        element: <WelcomeAdmin />,
      },
      {
        path: "/admin/produk",
        element: <ProdukAdmin />,
      },
      {
        path: "/admin/produk/kuotaproduk/:id",
        element: <KuotaIndex />,
      },
      {
        path: "/admin/hampers",
        element: <HampersAdmin />,
      },
      {
        path: "/admin/detailHampers",
        element: <DetailHampers />,
      },
      {
        path: "/admin/resep",
        element: <ResepAdmin />,
      },
      {
        path: "/admin/resep/detailResep",
        element: <DetailResep />,
      },
      {
        path: "/admin/bahanBaku",
        element: <BahanBakuAdmin />,
      },
      {
        path: "/admin/listCustomer",
        element: <ListCustomer />,
      },
      {
        path: "/admin/inputJarak",
        element: <InputJarak />,
      },
      {
        path: "/admin/konfirmasiPesanan",
        element: <KonfirmasiPesanan />,
      },
      {
        path: "/admin/konfirmasiPenarikan",
        element: <KonfirmasiPenarikan />,
      },
      {
        path: "/admin/updateStatus",
        element: <UpdateStatus />,
      },
      {
        path: "/admin/updateSelesaikanPesanan",
        element: <UpdateSelesaikanPesanan />,
      },
      {
        path: "/admin/pembatalanPesanan",
        element: <PembatalanPesanan />,
      },
    ],
  },
  {
    path: "/mo",
    element: <MoLayout />,
    children: [
      {
        path: "/mo",
        element: <WelcomeMo />,
      },
      {
        path: "/mo/pegawai",
        element: <PegawaiMo />,
      },
      {
        path: "/mo/penitip",
        element: <PenitipMo />,
      },
      {
        path: "/mo/pembelian",
        element: <PembelianMo />,
      },
      {
        path: "/mo/pengeluaran",
        element: <PengeluaranMo />,
      },
      {
        path: "/mo/pesanan",
        element: <PesananMo />,
      },
      {
        path: "/mo/daftarPesanan",
        element: <DaftarPesananMo />,
      },
      {
        path: "/mo/penjualanProduk",
        element: <TampilPesananaByBulanTahun />,
      },
      {
        path: "/mo/laporan/presensi-gaji",
        element: <LaporanPresensiGaji />,
      },
      {
        path: "/mo/laporan/pengeluaran-pemasukkan",
        element: <LaporanPengeluaranPemasukkan />,
      },
      {
        path: "/mo/laporan/transaksi-penitip",
        element: <LaporanTransaksiPenitip />,
      },
      {
        path: "/mo/laporanPenjualanBulananMo",
        element: <LaporanPenjualanBulananMo />,
      },
      {
        path: "/mo/laporanPenggunaanBahanBakuMo",
        element: <LaporanPenggunaanBahanBakuMo />,
      }
    ],
  },
  {
    path: "/owner",
    element: <OwnerLayout />,
    children: [
      {
        path: "/owner",
        element: <WelcomeOwner />,
      },
      {
        path: "/owner/gaji",
        element: <GajiOwner />,
      },
      {
        path: "/owner/gaji",
        element: <GajiOwner />,
      },
      {
        path: "/owner/laporanPesanan",
        element: <LaporanPesanan />,
      },
      {
        path: "/owner/laporanBahanBaku",
        element: <LaporanBahanBaku />,
      },
      {
        path: "/owner/laporanPenjualanBulanan",
        element: <LaporanPenjualanBulanan />,
      }
    ],
  },
  {
    // path: "/customer",
    element: <CustomerLayout />,
    children: [
      {
        path: "/profil",
        element: <ProfilCustomer />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/catalog",
        element: <CatalogPage />,
      },
      {
        path: "/informationprodukdate/:id/:tanggal",
        element: <ProdukInformationDate />,
      },
      {
        path: "/informationproduk/:id",
        element: <ProdukInformation />,
      },
      {
        path: "/detail_pesan/:id",
        element: <DetailPesanan />,
      },
      {
        path: "/detail_pesanAll/:id",
        element: <DetailPesananByKeranjang />,
      },
      {
        path: "/transaksiCetak/:id",
        element: <Transaksi />,
      },
      {
        path: "/showInputAlamat/:id",
        element: <AlamatInput />,
      },
      {
        path: "/transaksi",
        element: <Transaksi />,
      },
      {
        path: "/keranjangUser",
        element: <KeranjangUser />,
      },
      {
        path: "/order",
        element: <TampilPesanan />,
      },
      {
        path: "/konfirmasiPesananByCustomer",
        element: <KonfirmasiPesananByCustomer />,
      },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      // {
      //   path: "/home",
      //   element: <HomePage />,
      // },
      // {
      //   path: "/catalog",
      //   element: <CatalogPage />,
      // },
    ],
  },
]);

const AppRouter = () => {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          className: "z-50",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        }}
      />
      <RouterProvider router={router} />
    </>
  );
};

export default AppRouter;
