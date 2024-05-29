<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pengeluaran extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $table = 'pengeluaran';

    protected $primaryKey = 'id';

    protected $fillable = [
        'nama_pengeluaran',
        'tanggal_pengeluaran',
        'total_pengeluaran',
        'qty_pengeluaran'
    ];
}
