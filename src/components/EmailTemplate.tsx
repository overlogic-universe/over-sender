import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";


const EmailTemplate = ({
  senderContact,
  senderEmail,
  senderName,
  senderPosition,
  receiverName,
}: EmailTemplateProps) => {
  return (
    <Html>
      <Head />
      <Preview>{"Preview"}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Section className="mt-[32px]">
              <Img
                src={`https://fostifest.fostiums.org/_next/static/media/opengraph-image.781cc4ef.jpg`}
                alt="Overlogic"
                className="my-0 mx-auto w-full rounded-lg"
              />
            </Section>
            <Text className="text-black text-[14px] leading-[24px]">
              Kepada Yth. Tim {receiverName},
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Perkenalkan, nama saya {senderName}, perwakilan dari Forum Open
              Source Teknik Informatika (FOSTI) Universitas Muhammadiyah
              Surakarta (UMS). FOSTI merupakan Unit Kegiatan Mahasiswa di bawah
              Fakultas Komunikasi dan Informatika UMS, yang bergerak di bidang
              teknologi, khususnya mempelajari, memperdalam, dan menyebarkan
              penggunaan Open Source. Selain itu, FOSTI juga berkomitmen untuk
              mendukung pengembangan keorganisasian yang berkontribusi pada
              kemajuan dan pengembangan diri anggota kami.
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Dalam rangka meningkatkan pemahaman dan keterampilan di bidang
              teknologi, FOSTI UMS akan menyelenggarakan acara tahunan kami,
              <strong>FOSTIFEST 2024</strong>, dengan tema "Designing the Future: Creative Tech
              for The Digital Age". Acara ini dirancang untuk menjadi platform
              bagi mahasiswa dan praktisi teknologi untuk saling berbagi
              pengetahuan, ide, dan inovasi melalui serangkaian kegiatan sebagai
              berikut:
            </Text>      
            <Text className="text-black text-[14px] leading-[24px]">
            1. *Workshop Intensif*: "Creating a Real-Time Chat Application With Vue.js", yang mencakup pengenalan Vue.js, pembuatan UI aplikasi chat, pengelolaan state dengan Vuex, dan integrasi WebSockets.
2. *Kompetisi Teknologi Digital*:
    - *Software Development* untuk pengembangan perangkat lunak.
    - *Kompetisi Pemrograman* melalui platform seperti website, Labcode, dan HackerRank.
    - *Kompetisi Desain UI/UX* dengan tema "Smart City: Software Innovations for Social Impact".
3. *Acara Penutup*: Diskusi, tanya jawab, dan pengumuman pemenang, yang akan memberikan kesempatan bagi peserta untuk berinteraksi dengan profesional industri dan memperluas jaringan mereka.

Melalui email ini, kami ingin mengajukan proposal kerjasama dan sponsorship dengan Gamelab.id untuk mendukung kelancaran acara FOSTIFEST 2024. Kami percaya bahwa dengan dukungan dari Gamelab.id, kami dapat menciptakan acara yang memberikan dampak positif bagi pengembangan teknologi di Indonesia.

Sebagai informasi lebih lanjut, kami melampirkan proposal sponsorship FOSTIFEST 2024 dalam bentuk PDF yang mencakup detail acara, paket sponsorship yang tersedia, dan manfaat yang dapat diterima oleh Gamelab.id sebagai sponsor.

Untuk informasi lebih lanjut mengenai FOSTI dan FOSTIFEST, silakan kunjungi sosial media dan website kami:
- Website: [fostiums.org](http://fostiums.org)
- Website FOSTIFEST: [fostifest.fostiums.org](http://fostifest.fostiums.org)
- Instagram: [@fosti_ums](https://www.instagram.com/fosti_ums)
- Instagram FOSTIFEST: [@fostifest](https://www.instagram.com/fostifest)

Terima kasih atas perhatian dan dukungan yang diberikan. Kami sangat menantikan kabar baik dari Gamelab.id.

Hormat kami,

{senderName}
{senderPosition}
Forum Open Source Teknik Informatika (FOSTI)
Universitas Muhammadiyah Surakarta
{senderContact}
{senderEmail}
            </Text>
            {/* <Link href={payment} className="text-blue-600 no-underline py-1">
              Payment Information
            </Link> */}
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default EmailTemplate;

// <div>
//

//

//


//   </div>
