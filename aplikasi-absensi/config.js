/* =====================================================================
 *  PENGATURAN APLIKASI ABSENSI — hanya file ini yang perlu diubah.
 * ===================================================================== */
window.KONFIG_ABSENSI = {
  // 1) Tempel URL Web App Apps Script Anda (yang berakhiran /exec).
  //    Ambil dari Apps Script: Terapkan -> Kelola deployment -> salin "URL aplikasi web".
  URL_APPS_SCRIPT: 'https://script.google.com/macros/s/AKfycby0DOaq1DzKSFHCTr64g2dFE-SEWk9w4DE20gw5Z74lWW8nTKYvd_wBZMZ9dZYoXcgXSA/exec',

  // 2) Cara membuka sistem di dalam aplikasi:
  //    'tanam'   = sistem tampil di dalam jendela aplikasi (paling rapi, layar penuh).
  //                Butuh IZINKAN_EMBED_IFRAME = true di code.gs.
  //    'langsung' = aplikasi langsung berpindah ke halaman Apps Script.
  //                Pakai ini jika di HP tertentu GPS / unggah surat sakit tidak berfungsi di mode 'tanam'.
  MODE: 'tanam'
};
