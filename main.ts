import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function tanya(pertanyaan: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(pertanyaan, (jawaban) => {
            resolve(jawaban);
        });
    });
}

async function main() {
    const DISKON_MEMBER = 0.10;
    const BIAYA_SOPIR_PER_HARI = 100000;
    const DENDA_PER_HARI = 50000;

    let namaKendaraan = "";
    let jenisKendaraan = "";
    let hargaPerHari = 0;
    let lamaSewa = 0;
    let isMember = false;
    let menggunakanSopir = false;
    let hargaSewa = 0;
    let diskon = 0;
    let biayaSopir = 0;
    let hariTerlambat = 0;
    let denda = 0;

    console.log("\n==========================================");
    console.log("       SISTEM PERSEWAAN KENDARAAN");
    console.log("==========================================");

    const nama = await tanya("Nama pelanggan      : ");
    const noWa = await tanya("Nomor WhatsApp      : ");

    console.log("==========================================");
    console.log("Pilih jenis kendaraan:");
    console.log("1. Mobil");
    console.log("2. Sepeda");

    const pilihanKendaraan = Number(
        await tanya("Pilihan             : ")
    );
    console.log("==========================================");

    switch (pilihanKendaraan) {
        case 1: {
            jenisKendaraan = "Mobil";

            console.log("\n========== DAFTAR MOBIL ==========");
            console.log("1. Toyota Calya            - Rp250.000/hari");
            console.log("2. All New Brio            - Rp300.000/hari");
            console.log("3. New Agya                - Rp300.000/hari");
            console.log("4. Suzuki Ertiga           - Rp325.000/hari");
            console.log("5. All New Xenia           - Rp325.000/hari");
            console.log("6. All New Avanza          - Rp325.000/hari");
            console.log("7. Raize                   - Rp350.000/hari");
            console.log("8. BR-V                    - Rp350.000/hari");
            console.log("9. Xpander                 - Rp375.000/hari");
            console.log("10. Innova Reborn          - Rp500.000/hari");
            console.log("11. Innova Zenix G Hybrid  - Rp650.000/hari");
            console.log("12. Innova Zenix V Hybrid  - Rp750.000/hari");
            console.log("13. Venturer               - Rp750.000/hari");
            console.log("14. Fortuner GR            - Rp1.000.000/hari");
            console.log("15. Mercedes-Benz E-Class  - Rp2.550.000/hari");
            console.log("16. Alphard                - Rp2.550.000/hari");
            console.log("17. Hiace Commuter         - Rp1.300.000/hari");
            console.log("18. Hiace Premio           - Rp1.500.000/hari");

            const pilihanMobil = Number(
                await tanya("Pilih mobil        : ")
            );

            switch (pilihanMobil) {
                case 1:
                    namaKendaraan = "Toyota Calya";
                    hargaPerHari = 250000;
                    break;
                case 2:
                    namaKendaraan = "All New Brio";
                    hargaPerHari = 300000;
                    break;
                case 3:
                    namaKendaraan = "New Agya";
                    hargaPerHari = 300000;
                    break;
                case 4:
                    namaKendaraan = "Suzuki Ertiga";
                    hargaPerHari = 325000;
                    break;
                case 5:
                    namaKendaraan = "All New Xenia";
                    hargaPerHari = 325000;
                    break;
                case 6:
                    namaKendaraan = "All New Avanza";
                    hargaPerHari = 325000;
                    break;
                case 7:
                    namaKendaraan = "Raize";
                    hargaPerHari = 350000;
                    break;
                case 8:
                    namaKendaraan = "BR-V";
                    hargaPerHari = 350000;
                    break;
                case 9:
                    namaKendaraan = "Xpander";
                    hargaPerHari = 375000;
                    break;
                case 10:
                    namaKendaraan = "Innova Reborn";
                    hargaPerHari = 500000;
                    break;
                case 11:
                    namaKendaraan = "Innova Zenix G Hybrid";
                    hargaPerHari = 650000;
                    break;
                case 12:
                    namaKendaraan = "Innova Zenix V Hybrid";
                    hargaPerHari = 750000;
                    break;
                case 13:
                    namaKendaraan = "Venturer";
                    hargaPerHari = 750000;
                    break;
                case 14:
                    namaKendaraan = "Fortuner GR";
                    hargaPerHari = 1000000;
                    break;
                case 15:
                    namaKendaraan = "Mercedes-Benz E-Class";
                    hargaPerHari = 2550000;
                    break;
                case 16:
                    namaKendaraan = "Alphard";
                    hargaPerHari = 2550000;
                    break;
                case 17:
                    namaKendaraan = "Hiace Commuter";
                    hargaPerHari = 1300000;
                    break;
                case 18:
                    namaKendaraan = "Hiace Premio";
                    hargaPerHari = 1500000;
                    break;
                default:
                    console.log("Pilihan mobil tidak tersedia.");
                    return;
            }

            lamaSewa = Number(
                await tanya("\nLama sewa (hari)    : ")
            );

            if (lamaSewa <= 0) {
                console.log("Lama sewa harus lebih dari 0 hari.");
                return;
            }

            const jawabanSopir = await tanya(
                "Apakah menggunakan sopir? (yes/no) : "
            );

            menggunakanSopir =
                jawabanSopir.toLowerCase() === "yes";

            if (menggunakanSopir) {
                biayaSopir = BIAYA_SOPIR_PER_HARI * lamaSewa;
            }

            break;
        }

        case 2: {
            jenisKendaraan = "Sepeda";

            console.log("\n========== DAFTAR SEPEDA ==========");
            console.log("1. Honda Beat              - Rp75.000/hari");
            console.log("2. Honda Scoopy            - Rp85.000/hari");
            console.log("3. Honda Vario 160         - Rp100.000/hari");
            console.log("4. Honda PCX 160           - Rp250.000/hari");
            console.log("5. Yamaha N-Max            - Rp250.000/hari");
            console.log("6. Honda ADV               - Rp250.000/hari");

            const pilihanSepeda = Number(
                await tanya("Pilih sepeda       : ")
            );

            switch (pilihanSepeda) {
                case 1:
                    namaKendaraan = "Honda Beat";
                    hargaPerHari = 75000;
                    break;
                case 2:
                    namaKendaraan = "Honda Scoopy";
                    hargaPerHari = 85000;
                    break;
                case 3:
                    namaKendaraan = "Honda Vario 160";
                    hargaPerHari = 100000;
                    break;
                case 4:
                    namaKendaraan = "Honda PCX 160";
                    hargaPerHari = 250000;
                    break;
                case 5:
                    namaKendaraan = "Yamaha N-Max";
                    hargaPerHari = 250000;
                    break;
                case 6:
                    namaKendaraan = "Honda ADV";
                    hargaPerHari = 250000;
                    break;
                default:
                    console.log("Pilihan sepeda tidak tersedia.");
                    return;
            }

            lamaSewa = Number(
                await tanya("\nLama sewa (hari)    : ")
            );

            if (lamaSewa <= 0) {
                console.log("Lama sewa harus lebih dari 0 hari.");
                return;
            }

            break;
        }

        default:
            console.log("Jenis kendaraan tidak tersedia.");
            return;
    }

    hargaSewa = hargaPerHari * lamaSewa;

    const jawabanMember = await tanya(
        "\nApakah pelanggan member? (yes/no) : "
    );

    isMember = jawabanMember.toLowerCase() === "yes";

    if (isMember) {
        diskon = hargaSewa * DISKON_MEMBER;
    }

    if (!menggunakanSopir) {
        console.log("\n========== PENGEMBALIAN ==========");

        hariTerlambat = Number(
            await tanya(
                "Berapa hari terlambat mengembalikan kendaraan? (0 jika tepat waktu): "
            )
        );

        if (hariTerlambat > 0) {
            denda = hariTerlambat * DENDA_PER_HARI;
        }
    }

    const totalBayar = hargaSewa - diskon + biayaSopir + denda;

    console.log("\n==========================================");
    console.log("             STRUK PERSEWAAN");
    console.log("==========================================");
    console.log("Nama pelanggan      :", nama);
    console.log("Nomor WhatsApp      :", noWa);
    console.log("Jenis kendaraan     :", jenisKendaraan);
    console.log("Kendaraan           :", namaKendaraan);
    console.log("Harga per hari      :", `Rp${hargaPerHari.toLocaleString("id-ID")}`);
    console.log("Lama sewa           :", `${lamaSewa} hari`);
    console.log("------------------------------------------");
    console.log("Harga sewa          :", `Rp${hargaSewa.toLocaleString("id-ID")}`);
    console.log("Diskon member       :", `Rp${diskon.toLocaleString("id-ID")}`);

    if (jenisKendaraan === "Mobil") {
        console.log("Menggunakan sopir   :", menggunakanSopir ? "Ya" : "Tidak");
        console.log("Biaya sopir         :", `Rp${biayaSopir.toLocaleString("id-ID")}`);
    }

    if (!menggunakanSopir) {
        console.log("Hari terlambat      :", `${hariTerlambat} hari`);
        console.log("Denda keterlambatan :", `Rp${denda.toLocaleString("id-ID")}`);
    }

    console.log("------------------------------------------");
    console.log("TOTAL BAYAR         :", `Rp${totalBayar.toLocaleString("id-ID")}`);
    console.log("==========================================");
    console.log("\nTerima kasih telah menggunakan");
    console.log("layanan persewaan kendaraan.");

}


main()
    .finally(() => {
        rl.close();
    });