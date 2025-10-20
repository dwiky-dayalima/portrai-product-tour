import { Lightbulb, ChevronLeft, ChevronRight } from "lucide-react";

const ExecutiveMessage = () => {
  return (
    <div className="bg-[hsl(var(--message-card))] rounded-3xl p-8 shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-[hsl(var(--primary))]" />
          <h3 className="text-white font-semibold">Message from the Executives</h3>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
            <ChevronLeft className="w-4 h-4 text-white/60" />
          </button>
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            <span className="text-sm font-medium text-[hsl(var(--message-card))]">1</span>
          </div>
          <button className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
            <ChevronRight className="w-4 h-4 text-white/60" />
          </button>
        </div>
      </div>

      {/* Message Content */}
      <div className="bg-[hsl(var(--message-card-content))] rounded-2xl p-6">
        {/* Sender Info */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--avatar-purple))] flex items-center justify-center text-white text-lg font-bold">
            SJ
          </div>
          <div>
            <h4 className="font-semibold text-foreground">President Director</h4>
            <p className="text-sm text-muted-foreground">Sarah Johnson</p>
          </div>
        </div>

        {/* Message Body */}
        <div className="space-y-4 text-sm text-foreground leading-relaxed">
          <p className="font-semibold">Dear Participant,</p>
          
          <p>
            Kita tengah memasuki fase penting dalam perjalanan Amboja sebagai perusahaan 
            teknologi yang berbasis pada keberlanjutan dan inovasi. Setelah bertahun-tahun berfokus 
            pada perluasan pasar dan efisiensi operasional, kini saatnya kita memperkuat fondasi 
            manusia di balik semua pencapaian itu.
          </p>

          <p>
            Saya percaya bahwa keberhasilan jangka panjang hanya bisa dicapai jika kita mampu 
            membangun budaya kerja yang kolaboratif, sehat secara psikologis, dan menyenangkan. 
            Keseimbangan antara target dan keterlibatan karyawan adalah kunci untuk menjaga 
            performa tetap stabil di tengah tekanan.
          </p>

          <p>
            Karena itu, saya ingin mengajak seluruh pimpinan untuk memberikan ruang bagi inisiatif 
            yang mampu memperkuat keterikatan dan kebersamaan tim. Kegiatan engagement 
            internal bukan sekadar acara hiburan, melainkan investasi terhadap ketahanan organisasi 
            kita di masa depan.
          </p>

          <p>Terima kasih atas dedikasi dan partisipasi Anda.</p>

          <p className="font-semibold">Best regards,</p>
          
          <div>
            <p className="font-semibold">Sarah Johnson</p>
            <p className="text-muted-foreground">President Director</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveMessage;