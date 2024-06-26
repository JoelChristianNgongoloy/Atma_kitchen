<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Pengadaan;
use App\Models\BahanBaku;
use App\Models\Detail_Pengadaan;
use Symfony\Contracts\Service\Attribute\Required;

class PengadaanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $detailPengadaan = Detail_Pengadaan::with('bahanBaku', 'pengadaan')->get();

        if (count($detailPengadaan) > 0) {
            return response([
                'message' => 'Retrieved All Succes',
                'data' => $detailPengadaan
            ], 200);
        }

        return response([
            'message' => 'Pengadaan Not Found',
            'data' => null,
        ], 400);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $storeData = $request->all();

        $validate = Validator::make($storeData, [
            'harga_pengadaan' => 'required|numeric',
            'id_bahan_baku' => 'required',
            'jumlah_bahan_baku' => 'required'
        ]);

        $totalHarga = $storeData['harga_pengadaan'] * $storeData['jumlah_bahan_baku'];

        if ($validate->fails()) {
            return response(['message' => $validate->errors()], 400);
        }

        $pengadaan = Pengadaan::create([
            'harga_pengadaan' => $storeData['harga_pengadaan'],
            'tanggal_pengadaan' => now()->setTimezone('Asia/Jakarta')->format('Y-m-d'),
        ]);

        $detailPengadaan = Detail_Pengadaan::create([
            'id_bahan_baku' => $storeData['id_bahan_baku'],
            'id_pengadaan' => $pengadaan->id,
            'total_harga' => $totalHarga,
            'jumlah_bahan_baku' => $storeData['jumlah_bahan_baku']
        ]);

        return response([
            'message' => 'Create Pengadaan Success',
            'data' => $detailPengadaan
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $detailPengadaan = Detail_Pengadaan::with(['bahanBaku', 'pengadaan'])->where('id_pengadaan', $id)->get();
        if (count($detailPengadaan) > 0) {
            return response([
                'message' => 'Retrieve All Success',
                'data' => $detailPengadaan
            ], 200);
        }

        return response([
            'message' => 'Pengadaan Empty',
            'data' => null
        ], 400);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $updateData = $request->all();

        // Validasi data
        $validate = Validator::make($updateData, [
            'harga_pengadaan' => 'required|numeric',
            'id_bahan_baku' => 'required',
            'jumlah_bahan_baku' => 'required|numeric'
        ]);

        if ($validate->fails()) {
            return response(['message' => $validate->errors()], 400);
        }

        // Temukan detail pengadaan berdasarkan ID
        $detailPengadaan = Detail_Pengadaan::find($id);

        if (!$detailPengadaan) {
            return response(['message' => 'Detail Pengadaan not found'], 404);
        }

        // Temukan pengadaan berdasarkan id_pengadaan dari detail pengadaan
        $pengadaan = Pengadaan::find($detailPengadaan->id_pengadaan);

        if (!$pengadaan) {
            return response(['message' => 'Pengadaan not found'], 404);
        }

        // Hitung total harga baru
        $totalHargaBaru = $updateData['harga_pengadaan'] * $updateData['jumlah_bahan_baku'];

        // Update pengadaan dan detail pengadaan
        $pengadaan->update([
            'harga_pengadaan' => $updateData['harga_pengadaan'],
        ]);

        $detailPengadaan->update([
            'id_bahan_baku' => $updateData['id_bahan_baku'],
            'total_harga' => $totalHargaBaru,
            'jumlah_bahan_baku' => $updateData['jumlah_bahan_baku']
        ]);

        return response([
            'message' => 'Update Pengadaan Success',
            'data' => [
                'pengadaan' => $pengadaan,
                'detail_pengadaan' => $detailPengadaan
            ]
        ], 200);
    }



    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $pengadaan = Pengadaan::find($id);

        if (is_null($pengadaan)) {
            return response([
                'message' => 'Pengadaan Not Found',
                'data' => null
            ], 400);
        }

        if ($pengadaan->delete()) {
            return response([
                'message' => 'Delete Pengadaan Success',
                'data' => $pengadaan
            ], 200);
        }

        return response([
            'message' => 'Delete Pengadaan Faileld',
            'data' => null
        ], 400);
    }
}
