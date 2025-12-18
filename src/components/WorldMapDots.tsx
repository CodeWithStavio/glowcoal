"use client";

export default function WorldMapDots({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 600"
      className={`w-full h-full ${className}`}
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="dotGrid" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="currentColor" opacity="0.15" />
        </pattern>
      </defs>

      {/* Background dot grid */}
      <rect width="100%" height="100%" fill="url(#dotGrid)" />

      {/* World Map Dots - Simplified continents with Syria highlighted */}
      <g fill="currentColor" opacity="0.3">

        {/* North America */}
        <circle cx="180" cy="140" r="3" />
        <circle cx="195" cy="135" r="3" />
        <circle cx="210" cy="130" r="3" />
        <circle cx="225" cy="125" r="3" />
        <circle cx="240" cy="130" r="3" />
        <circle cx="255" cy="140" r="3" />
        <circle cx="270" cy="150" r="3" />
        <circle cx="165" cy="155" r="3" />
        <circle cx="180" cy="160" r="3" />
        <circle cx="195" cy="165" r="3" />
        <circle cx="210" cy="160" r="3" />
        <circle cx="225" cy="155" r="3" />
        <circle cx="240" cy="160" r="3" />
        <circle cx="150" cy="170" r="3" />
        <circle cx="165" cy="175" r="3" />
        <circle cx="180" cy="180" r="3" />
        <circle cx="195" cy="185" r="3" />
        <circle cx="210" cy="180" r="3" />
        <circle cx="225" cy="175" r="3" />
        <circle cx="240" cy="180" r="3" />
        <circle cx="255" cy="175" r="3" />
        <circle cx="165" cy="195" r="3" />
        <circle cx="180" cy="200" r="3" />
        <circle cx="195" cy="205" r="3" />
        <circle cx="210" cy="200" r="3" />
        <circle cx="225" cy="195" r="3" />
        <circle cx="240" cy="200" r="3" />
        <circle cx="255" cy="195" r="3" />
        <circle cx="270" cy="190" r="3" />
        <circle cx="180" cy="220" r="3" />
        <circle cx="195" cy="225" r="3" />
        <circle cx="210" cy="220" r="3" />
        <circle cx="225" cy="215" r="3" />
        <circle cx="240" cy="220" r="3" />
        <circle cx="255" cy="225" r="3" />
        <circle cx="270" cy="220" r="3" />
        <circle cx="285" cy="215" r="3" />
        <circle cx="300" cy="220" r="3" />

        {/* Central America */}
        <circle cx="240" cy="280" r="3" />
        <circle cx="255" cy="285" r="3" />
        <circle cx="270" cy="290" r="3" />
        <circle cx="285" cy="295" r="3" />
        <circle cx="260" cy="300" r="3" />
        <circle cx="275" cy="310" r="3" />

        {/* South America */}
        <circle cx="320" cy="320" r="3" />
        <circle cx="335" cy="330" r="3" />
        <circle cx="350" cy="340" r="3" />
        <circle cx="365" cy="350" r="3" />
        <circle cx="340" cy="355" r="3" />
        <circle cx="355" cy="365" r="3" />
        <circle cx="370" cy="375" r="3" />
        <circle cx="345" cy="380" r="3" />
        <circle cx="360" cy="390" r="3" />
        <circle cx="350" cy="400" r="3" />
        <circle cx="365" cy="410" r="3" />
        <circle cx="355" cy="420" r="3" />
        <circle cx="345" cy="435" r="3" />
        <circle cx="335" cy="450" r="3" />
        <circle cx="325" cy="465" r="3" />
        <circle cx="315" cy="480" r="3" />
        <circle cx="305" cy="490" r="3" />
        <circle cx="295" cy="500" r="3" />
        <circle cx="380" cy="360" r="3" />
        <circle cx="395" cy="370" r="3" />
        <circle cx="385" cy="385" r="3" />
        <circle cx="375" cy="400" r="3" />
        <circle cx="370" cy="415" r="3" />
        <circle cx="360" cy="430" r="3" />
        <circle cx="310" cy="340" r="3" />
        <circle cx="325" cy="350" r="3" />
        <circle cx="300" cy="355" r="3" />
        <circle cx="315" cy="365" r="3" />
        <circle cx="330" cy="375" r="3" />

        {/* Europe */}
        <circle cx="520" cy="120" r="3" />
        <circle cx="535" cy="115" r="3" />
        <circle cx="550" cy="120" r="3" />
        <circle cx="565" cy="125" r="3" />
        <circle cx="580" cy="130" r="3" />
        <circle cx="505" cy="135" r="3" />
        <circle cx="520" cy="140" r="3" />
        <circle cx="535" cy="145" r="3" />
        <circle cx="550" cy="150" r="3" />
        <circle cx="565" cy="155" r="3" />
        <circle cx="580" cy="150" r="3" />
        <circle cx="595" cy="145" r="3" />
        <circle cx="610" cy="140" r="3" />
        <circle cx="490" cy="155" r="3" />
        <circle cx="505" cy="160" r="3" />
        <circle cx="520" cy="165" r="3" />
        <circle cx="535" cy="170" r="3" />
        <circle cx="550" cy="175" r="3" />
        <circle cx="565" cy="170" r="3" />
        <circle cx="580" cy="165" r="3" />
        <circle cx="595" cy="160" r="3" />
        <circle cx="610" cy="155" r="3" />
        <circle cx="625" cy="150" r="3" />
        <circle cx="475" cy="175" r="3" />
        <circle cx="490" cy="180" r="3" />
        <circle cx="505" cy="185" r="3" />
        <circle cx="520" cy="190" r="3" />
        <circle cx="535" cy="195" r="3" />
        <circle cx="550" cy="190" r="3" />
        <circle cx="565" cy="185" r="3" />
        <circle cx="580" cy="180" r="3" />
        <circle cx="595" cy="175" r="3" />
        <circle cx="610" cy="170" r="3" />
        <circle cx="625" cy="165" r="3" />
        <circle cx="640" cy="160" r="3" />

        {/* Russia / Northern Asia */}
        <circle cx="655" cy="120" r="3" />
        <circle cx="670" cy="115" r="3" />
        <circle cx="685" cy="110" r="3" />
        <circle cx="700" cy="105" r="3" />
        <circle cx="715" cy="100" r="3" />
        <circle cx="730" cy="95" r="3" />
        <circle cx="745" cy="100" r="3" />
        <circle cx="760" cy="105" r="3" />
        <circle cx="775" cy="110" r="3" />
        <circle cx="790" cy="115" r="3" />
        <circle cx="805" cy="120" r="3" />
        <circle cx="820" cy="115" r="3" />
        <circle cx="835" cy="110" r="3" />
        <circle cx="850" cy="105" r="3" />
        <circle cx="865" cy="110" r="3" />
        <circle cx="880" cy="115" r="3" />
        <circle cx="895" cy="120" r="3" />
        <circle cx="655" cy="140" r="3" />
        <circle cx="670" cy="135" r="3" />
        <circle cx="685" cy="130" r="3" />
        <circle cx="700" cy="125" r="3" />
        <circle cx="715" cy="120" r="3" />
        <circle cx="730" cy="115" r="3" />
        <circle cx="745" cy="120" r="3" />
        <circle cx="760" cy="125" r="3" />
        <circle cx="775" cy="130" r="3" />
        <circle cx="790" cy="135" r="3" />
        <circle cx="805" cy="140" r="3" />
        <circle cx="820" cy="135" r="3" />
        <circle cx="835" cy="130" r="3" />
        <circle cx="850" cy="125" r="3" />
        <circle cx="655" cy="160" r="3" />
        <circle cx="670" cy="155" r="3" />
        <circle cx="685" cy="150" r="3" />
        <circle cx="700" cy="145" r="3" />
        <circle cx="715" cy="140" r="3" />
        <circle cx="730" cy="145" r="3" />
        <circle cx="745" cy="150" r="3" />
        <circle cx="760" cy="155" r="3" />
        <circle cx="775" cy="160" r="3" />

        {/* Africa */}
        <circle cx="520" cy="260" r="3" />
        <circle cx="535" cy="255" r="3" />
        <circle cx="550" cy="260" r="3" />
        <circle cx="565" cy="265" r="3" />
        <circle cx="580" cy="270" r="3" />
        <circle cx="595" cy="265" r="3" />
        <circle cx="610" cy="260" r="3" />
        <circle cx="505" cy="275" r="3" />
        <circle cx="520" cy="280" r="3" />
        <circle cx="535" cy="285" r="3" />
        <circle cx="550" cy="290" r="3" />
        <circle cx="565" cy="295" r="3" />
        <circle cx="580" cy="300" r="3" />
        <circle cx="595" cy="295" r="3" />
        <circle cx="610" cy="290" r="3" />
        <circle cx="625" cy="285" r="3" />
        <circle cx="505" cy="305" r="3" />
        <circle cx="520" cy="310" r="3" />
        <circle cx="535" cy="315" r="3" />
        <circle cx="550" cy="320" r="3" />
        <circle cx="565" cy="325" r="3" />
        <circle cx="580" cy="330" r="3" />
        <circle cx="595" cy="335" r="3" />
        <circle cx="610" cy="330" r="3" />
        <circle cx="625" cy="325" r="3" />
        <circle cx="640" cy="320" r="3" />
        <circle cx="520" cy="340" r="3" />
        <circle cx="535" cy="345" r="3" />
        <circle cx="550" cy="350" r="3" />
        <circle cx="565" cy="355" r="3" />
        <circle cx="580" cy="360" r="3" />
        <circle cx="595" cy="365" r="3" />
        <circle cx="610" cy="360" r="3" />
        <circle cx="625" cy="355" r="3" />
        <circle cx="535" cy="375" r="3" />
        <circle cx="550" cy="380" r="3" />
        <circle cx="565" cy="385" r="3" />
        <circle cx="580" cy="390" r="3" />
        <circle cx="595" cy="395" r="3" />
        <circle cx="610" cy="390" r="3" />
        <circle cx="550" cy="410" r="3" />
        <circle cx="565" cy="415" r="3" />
        <circle cx="580" cy="420" r="3" />
        <circle cx="595" cy="425" r="3" />
        <circle cx="565" cy="440" r="3" />
        <circle cx="580" cy="445" r="3" />
        <circle cx="580" cy="465" r="3" />

        {/* Middle East - General Area */}
        <circle cx="625" cy="210" r="3" />
        <circle cx="640" cy="215" r="3" />
        <circle cx="655" cy="220" r="3" />
        <circle cx="670" cy="225" r="3" />
        <circle cx="625" cy="230" r="3" />
        <circle cx="640" cy="235" r="3" />
        <circle cx="655" cy="240" r="3" />
        <circle cx="670" cy="245" r="3" />
        <circle cx="685" cy="240" r="3" />
        <circle cx="700" cy="235" r="3" />
        <circle cx="640" cy="255" r="3" />
        <circle cx="655" cy="260" r="3" />
        <circle cx="670" cy="265" r="3" />
        <circle cx="685" cy="260" r="3" />
        <circle cx="700" cy="255" r="3" />

        {/* India */}
        <circle cx="760" cy="220" r="3" />
        <circle cx="775" cy="225" r="3" />
        <circle cx="790" cy="230" r="3" />
        <circle cx="745" cy="240" r="3" />
        <circle cx="760" cy="245" r="3" />
        <circle cx="775" cy="250" r="3" />
        <circle cx="790" cy="255" r="3" />
        <circle cx="730" cy="260" r="3" />
        <circle cx="745" cy="265" r="3" />
        <circle cx="760" cy="270" r="3" />
        <circle cx="775" cy="275" r="3" />
        <circle cx="790" cy="280" r="3" />
        <circle cx="745" cy="290" r="3" />
        <circle cx="760" cy="295" r="3" />
        <circle cx="775" cy="300" r="3" />
        <circle cx="760" cy="315" r="3" />
        <circle cx="775" cy="320" r="3" />
        <circle cx="760" cy="335" r="3" />
        <circle cx="805" cy="270" r="3" />
        <circle cx="820" cy="275" r="3" />

        {/* Southeast Asia */}
        <circle cx="835" cy="280" r="3" />
        <circle cx="850" cy="285" r="3" />
        <circle cx="865" cy="290" r="3" />
        <circle cx="880" cy="295" r="3" />
        <circle cx="835" cy="300" r="3" />
        <circle cx="850" cy="305" r="3" />
        <circle cx="865" cy="310" r="3" />
        <circle cx="850" cy="325" r="3" />
        <circle cx="865" cy="330" r="3" />
        <circle cx="880" cy="325" r="3" />
        <circle cx="895" cy="320" r="3" />
        <circle cx="880" cy="340" r="3" />
        <circle cx="895" cy="345" r="3" />
        <circle cx="910" cy="340" r="3" />
        <circle cx="925" cy="345" r="3" />
        <circle cx="895" cy="360" r="3" />
        <circle cx="910" cy="365" r="3" />
        <circle cx="925" cy="360" r="3" />
        <circle cx="940" cy="355" r="3" />

        {/* China */}
        <circle cx="835" cy="180" r="3" />
        <circle cx="850" cy="175" r="3" />
        <circle cx="865" cy="180" r="3" />
        <circle cx="880" cy="185" r="3" />
        <circle cx="895" cy="190" r="3" />
        <circle cx="820" cy="200" r="3" />
        <circle cx="835" cy="205" r="3" />
        <circle cx="850" cy="200" r="3" />
        <circle cx="865" cy="205" r="3" />
        <circle cx="880" cy="210" r="3" />
        <circle cx="895" cy="215" r="3" />
        <circle cx="910" cy="210" r="3" />
        <circle cx="820" cy="225" r="3" />
        <circle cx="835" cy="230" r="3" />
        <circle cx="850" cy="225" r="3" />
        <circle cx="865" cy="230" r="3" />
        <circle cx="880" cy="235" r="3" />
        <circle cx="895" cy="240" r="3" />
        <circle cx="910" cy="235" r="3" />
        <circle cx="835" cy="255" r="3" />
        <circle cx="850" cy="250" r="3" />
        <circle cx="865" cy="255" r="3" />
        <circle cx="880" cy="260" r="3" />
        <circle cx="895" cy="265" r="3" />

        {/* Japan & Korea */}
        <circle cx="940" cy="180" r="3" />
        <circle cx="955" cy="175" r="3" />
        <circle cx="970" cy="180" r="3" />
        <circle cx="925" cy="195" r="3" />
        <circle cx="940" cy="200" r="3" />
        <circle cx="955" cy="195" r="3" />
        <circle cx="970" cy="200" r="3" />
        <circle cx="985" cy="195" r="3" />
        <circle cx="940" cy="220" r="3" />
        <circle cx="955" cy="215" r="3" />
        <circle cx="970" cy="220" r="3" />
        <circle cx="985" cy="225" r="3" />
        <circle cx="955" cy="235" r="3" />
        <circle cx="970" cy="240" r="3" />

        {/* Australia */}
        <circle cx="920" cy="420" r="3" />
        <circle cx="935" cy="415" r="3" />
        <circle cx="950" cy="420" r="3" />
        <circle cx="965" cy="425" r="3" />
        <circle cx="980" cy="420" r="3" />
        <circle cx="995" cy="415" r="3" />
        <circle cx="920" cy="440" r="3" />
        <circle cx="935" cy="445" r="3" />
        <circle cx="950" cy="440" r="3" />
        <circle cx="965" cy="445" r="3" />
        <circle cx="980" cy="450" r="3" />
        <circle cx="995" cy="445" r="3" />
        <circle cx="1010" cy="440" r="3" />
        <circle cx="935" cy="465" r="3" />
        <circle cx="950" cy="470" r="3" />
        <circle cx="965" cy="475" r="3" />
        <circle cx="980" cy="470" r="3" />
        <circle cx="995" cy="465" r="3" />
        <circle cx="1010" cy="460" r="3" />
        <circle cx="950" cy="490" r="3" />
        <circle cx="965" cy="495" r="3" />
        <circle cx="980" cy="490" r="3" />
        <circle cx="995" cy="485" r="3" />
        <circle cx="1010" cy="480" r="3" />

        {/* New Zealand */}
        <circle cx="1050" cy="500" r="3" />
        <circle cx="1065" cy="505" r="3" />
        <circle cx="1055" cy="520" r="3" />
        <circle cx="1070" cy="525" r="3" />
      </g>

      {/* Syria - Highlighted */}
      <g fill="currentColor" opacity="0.6">
        <circle cx="640" cy="200" r="4" />
        <circle cx="652" cy="196" r="4" />
        <circle cx="664" cy="200" r="4" />
        <circle cx="634" cy="212" r="4" />
        <circle cx="646" cy="208" r="4" />
        <circle cx="658" cy="212" r="4" />
        <circle cx="670" cy="208" r="4" />
        <circle cx="640" cy="220" r="4" />
        <circle cx="652" cy="224" r="4" />
        <circle cx="664" cy="220" r="4" />
      </g>

      {/* Syria Glow Effect */}
      <g fill="currentColor" opacity="0.15">
        <circle cx="652" cy="210" r="35" />
      </g>
    </svg>
  );
}
