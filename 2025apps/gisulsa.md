# 목차
- [1. 컴퓨터 구조](#1-컴퓨터-구조)
- [2. 운영체제](#2-운영체제)
- [3. 네트워크](#3-네트워크)
- [4. 보안](#4-보안)
- [5. 소프트웨어 공학](#5-소프트웨어-공학)
- [6. 알고리즘](#6-알고리즘)
- [7. IT경영](#7-it-경영)
- [8. 데이터베이스](#8-데이터베이스)
- [9. 인공지능](#9-인공지능)
- [10. 클라우드](#10-클라우드)
  
# 1 컴퓨터 구조
- 2024년 01월 10일
- https://www.yes24.com/product/goods/123665146

## PART 1 CPU(Central Processing Unit)
1. Computer의 5대 구성요소
2. Computer System의 Hardware, Software, Firmware의 구성요소와 발전 방향
3. CPU(Central Processing Unit)
4. Stored Program Computer 개념을 제시한 폰노이만 컴퓨터(Von Neumann Computer) 구조의 특징과 문제점, 해결 방안(Harvard 구조와 비교)
5. 폰노이만(Von Neumann)과 하바드(Havard) 컴퓨터 구조
6. CISC와 RISC 명령어 구조
7. 아래 연산을 CISC와 RISC 명령어 구조로 연산하는 예를 들고 CISC와 RISC에 대해 비교하시오.
8. CPU 명령어 형식의 유형에 대해 설명하고 산술식 Y＝A×(B＋C)에 대해 0 주소, 1 주소, 2 주소, 3 주소 명령 방식을 아래 명령어를 선택하여 기술하시오(PUSH, POP, MUL, ADD, LOAD, STORE, MOV 명령)
9. 시스템 버스(System Bus)
10. CPI(Clock Per Instruction) 개념을 설명하고 Processor 성능 향상 방안
11. CPU 명령어 사이클(Cycle)과 레지스터(Register)
12. CPU Major State
13. CPU의 Major State를 Flowchart화하여 설명하시오.
14. 명령어 집합 구조(ISA)
15. CPU 주소지정방식의 유형 및 예시
16. 아래 ADD(덧셈) 명령어의 CPU 실행 사이클(Execution Cycle) 동작에 대해 설명하시오.
17. CPU의 명령어 인출 사이클(Fetch Cycle) 동작에 대해 설명하시오(IF: Instruction Fetch).
18. 인터럽트(Interrupt) Cycle이 추가된 명령어 사이클에 대해 설명하시오.
19. ALU(Arithmetic Logic Unit)
20. 제어유니트(Control Unit)의 구성과 구현 방법
21. 고정 배선(Hard wired) 방식과 마이크로 프로그래밍(Micro-Programming) 방식
22. 제어 신호 생성을 위한 수직적(Vertical), 수평적(Horizontal) 마이크로 프로그래밍
23. 컴퓨터 메인보드(Main Board)에서의 North Bridge와 South Bridge
24. Multi-Core 간의 인터페이스 기술 발전과 CPU와 주변장치 간의 인터페이스의 필요성
25. CPU Register의 종류를 나열하고 기능을 설명하시오.

## PART 2 Memory
26. 메모리 계층구조(Memory Hierarchy)
27. 메모리 계층구조에서 캐시(Cache) 메모리(Memory)의 주요 개념
28. 메모리 계층구조(Memory Hierarchy)에 대해 기술하고 Cache Memory와 Virtual(가상) Memory와의 비교
29. Cache Flush, Cache Clean, Cache Invalidate
30. 메모리(Memory) 병목(Bottleneck) 현상 최소화 방안
31. MMU(Memory Management Unit)
32. TLB(Translation Look aside Buffer)
33. HBM(High Bandwidth Memory)
34. PIM(Processing In Memory)
35. CAM(Content-Addressable Memory)에 대하여 일반적인 메모리와 비교(기본개념, 액세스 방법 및 활용 분야)
36. CAM(Content-Addressable Memory)에 대하여 예시를 들어 설명하시오.
37. Memory 인터리빙(Interleaving)
38. Flash Memory를 RAM과 EEPROM과 비교
39. PRAM(Phase change memory RAM)
40. RAID 0＋1과 RAID 1＋0
41. RAID 0, 1, 5, 6, RAID 1＋0
42. SRAM과 DRAM을 비교하고 DDR SDRAM의 핵심기술
43. DDR SDRAM(Double Data Rate Synchronous DRAM)의 갱신(Refresh)에 대해 다음을 설명하시오.
(1) DRAM에서 갱신(Refresh)이 필요한 이유
(2) 자동 갱신(Auto Refresh)
(3) 셀프 갱신(Self Refresh)
(4) 저전력 자동 셀프 갱신(LPASR : Low Power Auto Self Refresh)
44. NAND Flash에서 Write(쓰기), Read(읽기), Erase(삭제) 과정을 상세히 설명하시오.
45. Flash ROM의 프로그래밍, Read, Erase 동작을 설명, NOR와 NAND Flash의 차이점
46. FTL(Flash Translation Layer)의 개념 필요성 동작 방법, Mapping 방법
47. Flash Memory 타입(Type)에는 SLC, MLC, TLC, QLC 타입으로 구분할 수 있다. 각각에 대해 설명하고 특징을 비교하시오.
48. FTL(Flash Translation Layer) 구조에 대해 상세하게 설명하시오.
49. FTL(Flash Translation Layer)의 핵심기술인 Wear Leveling, Garbage Collection, Over Provision, NCQ(Native Command Queuing), TRIM 동작에 대해 각각 설명하시오.
50. SSD(Solid State Device)
51. SSD(Solid State Device)와 HDD(Hard Disk Drive)의 차이점
52. CPU 관점에서 주기억장치 Access Time이 400ns이고 Cache Access Time이 50ns일 때 캐쉬의 적중률이 90%라면 평균기억장치 Access Time은 몇 ns인가?
53. 두 계층으로 이루어진 기억장치시스템에서 첫 번째 계층의 기억장치 액세스 시간이 40ns이고 두 번째 계층의 기억장치 액세스 시간은 400ns이다. 아래 2가지 질문에 답하시오.
(1) 첫 번째 계층의 기억장치에 대한 적중률이 90%일 때 평균기억장치 액세스 시간을 구하시오.
(2) 첫 번째 계층의 기억장치에 대한 적중률이 0%부터 20% 간격으로 100%까지 변할 때의 평균기억장치 액세스 시간들을 구하여 그래프를 그리고 결과에 대해 설명하시오. 단, 그래프
의 x축은 적중률 y축은 액세스 시간으로 한다.
54. 아래 3개 문제에 대해 답변하시오.
문1) 컴퓨터시스템에 디스크 캐쉬를 도입함으로써 평균 디스크 액세스 시간이 20ms에서 8.3ms로 감소되었다. 디스크 캐쉬의 적중률(Hit Ratio)이 60%라면 디스크 캐쉬의 Access Time은 얼마인가?
문2) 주기억장치 Access Time이 300ns, 캐쉬(Cache) 액세스 타입이 60ns인 시스템에서 기억장치 Access가 1000번이 수행되었다. 그중의 60%는 읽기동작이고 40%는 쓰기동작이었으며 평균적중률은 80%였다. Cache Write 정책인 Write-through와 Write-Back 방식에서 각각의 평균기억장치 Access Time을 구하시오.
문3) 두 계층의 Cache를 가진 시스템에서 첫 번째 계층의 Cache인 L1의 Access Time은 25ns, 두 번째 계층의 캐쉬인 L2의 Access Time은 80ns이고 주기억장치 Access Time은 250ns이다. L1 적중률이 75%이고 L2의 적중률은 90%일 때 평균기억장치 Access Time을 구하시오.
55. 빅 엔디언(Big Endian)과 리틀 엔디언(Little Endian)

## PART 3 병렬 컴퓨터
56. 병렬 컴퓨터의 Flynn의 분류, 활용 사례
57. 병렬 컴퓨터 상호연결망 성능 결정요소와 종류
58. 병렬처리 시스템의 상호연결망(Inter connection Network)에 대해 다음을 설명하시오.
가. 상호연결망의 개념과 종류
나. 토러스(Torus) 구조
59. 병렬 컴퓨터를 위한 SMP, MPP, NUMA
60. 병렬처리(Parallel processing), 그레인(Grain)
61. 명령어 파이프라이닝(Pipelining)
62. Superscalar와 VLIW(Very Long Instruction Word)
63. EPIC(Explicitly Parallel Instruction Computing)
64. 명령어 수준 병렬성(ILP) 차원에서 슈퍼스칼라(Superscalar), VLIW(Very Long Instruction Word), 슈퍼파이프라인(Superpipeline)의 개념과 특징에 대해 설명하시오.
65. 병렬 컴퓨터의 파이프라이닝과 벡터 프로세싱(1교시)
66. 병렬 컴퓨터의 파이프라이닝과 벡터 프로세싱에 대해 비교 분석(2교시)
67. 명령어 파이프라인의 해저드(Hazard) 발생 유형 3가지의 원인, 해결책
68. 4단계 명령어 파이프라이닝(Pipelining)
69. 2단계, 4단계 6단계 명령어 파이프라인, Data 해저드(Hazard)의 발생 원인과 해결 방안

## PART 4 Interrupt 및 I/O Interface
70. Interrupt 구동 I/O
71. Interrupt의 처리과정과 종류, Interrupt 중첩(Nesting)
72. Interrupt를 처리하고 있는 프로세서에 또 다른 인터럽트가 발생되었을 때 조건에 따른 처리 방법
73. DMA(Direct Memory Access)
74. Locality(지역성) 원리와 활용 사례
75. 입출력장치 인터페이스의 개념과 필요성, 발전 방향
76. I/O(Input/Output) 전송방식의 필요성과 종류
77. I/O(입출력) 방식인 다중 Interrupt, Daisy chain 방식, SW(Software) Polling 방식
78. RS-232C
79. JTAG(Joint Test Action Group)의 제공 기능
80. 직렬(Serial) 인터페이스인 RS-232C, SPI(Serial Peripheral Interface), I2C(Inter Integrated Circuit), IrDA(Infrared Data Association)에 대해 각각 설명하시오.
81. I2C Interface의 특징과 동작 순서
82. SPI(Serial Peripheral Interface)의 신호구성과 동작 예, 그리고 장단점
83. IEEE 1394와 USB 인터페이스
84. DVI와 HDMI 규격
85. MHL 3.0(Mobile High Definition Link 3.0)
86. SATA(Serial Advanced Technology Attachment)
87. IEEE 1394와 USB
88. USB(Universal Serial Bus) 3.0의 Protocol Stack, 핵심기술, USB2.0과 비교
89. USB3.0의 핵심기술과 USB2.0과 비교
90. USB(Universal Serial Bus) 3.1
91. Thunderbolt 인터페이스(1교시)
92. Thunderbolt 인터페이스 설명(2교시)
93. PCI-Express 인터페이스
94. PCI(Peripheral Component Interface)-Express의 등장 배경, Protocol Stack, PCI와 비교, 복수링크 전송방법에 대해 기술하시오.
95. IO 주소 지정(IO Addressing) 방식
96. 아래는 프린트 IO 제어기 내부 구조의 일부이다. Programmed IO 방식에 대한 설명과 아래 Programmed IO 방식으로 프린터에 문자열 쓰기 Program 예시에 대한 구체적인 동작 과정을 기술하시오.
97. 아래 조건에서 기억장치-사상 I/O(Memory Mapped I/O) 방식으로 프린터에 출력하는 프로그램을 작성하시오.
98. 아래 조건에서 분리형 I/O(Isolated I/O) 방식으로 프린터에 출력하는 프로그램을 작성하시오.

## PART 5 신기술
99. 하이퍼바이저(Hypervisor)
100. 가상화(Virtualization), 전(Full)가상화, 반(Para)가상화
101. 가상화에 대한 다음을 설명하시오.
가. 일반적인 운영체제의 프로그램 동작방식
나. 응용프로그램 가상화 동작방식
다. 원격 데스크톱 프로토콜의 종류
102. 마이크로서비스 아키텍처(Micro-service Architecture)
103. Scale-Up/Scale-Out
104. MR(Mixed Reality)
105. MR(Mixed Reality)에 대해 설명하시오.
106. 지능형 CCTV 스마트관제
107. 멀티모달 인터페이스(Multimodal Interface)의 구성요소
108. 정보기술 측면에서 UI(User Interface)와 UI의 시대적 요구 변화 내용
109. 증강현실과 가상현실 비교, 모바일 증강현실을 구현하기 위한 Hardware를 설명하시오.
110. 가상현실(Virtual Reality)은 ICT 및 인프라의 발달로 지속 확산되고 있다. 가상현실의 개념, 확산 요인, 생태계 현황 및 시사점에 대하여 설명하시오.
111. 스마트 더스트(Smart Dust)에 대해 설명하시오.
112. UHDTV(Ultra HDTV)
113. SMART TV의 기술 요소
114. SCM(Storage Class Memory)
115. 인 메모리(In Memory) Computing에 대해 설명하시오.
116. PM-OLED와 AM-OLED
117. UHDTV의 방송시스템 개발 방안(미디어 획득부터 디스플레이까지의 과정)
118. BYOD(Bring Your Own Device)
119. 통합스토리지(Unified Storage)
120. VDI(Virtual Desktop Infrastructure)의 구성과 핵심 기술 요소
121. OSHW(Open Source Hardware)
122. BD(Blu-ray Disc)에 적용된 Contents 보호 기술 3가지
123. 3D 프린터의 제약사항과 해결 방안, 3D 프린터의 활용 분야
124. Wearable 기기의 구현 기술과 Smart Watch Device의 기능
125. Flexible Display 유형과 핵심 기술
126. 무선전력전송(WPT: Wireless Power Transfer) 기술
127. Wearable Device에 적용되는 방수 및 방진의 등급
128. Wearable Device 중 방수 제품의 방수 방법에 대한 적용 기술
129. RFID(Radio Frequency Identification)
130. COS(Chip Operating System)
131. Smart Phone Sensor
132. Simultaneous Multi-Threading
133. UI(User Interface)의 시대적 변화
134. SoC(System On Chip)
135. SIP(System In Package)
136. Touch Screen의 방식 및 동작 원리
137. Barcode와 RFID의 장단점
138. Touch Panel
139. MEMS(Micro Electro Mechanical System)
140. VTL(Virtual Tape Library)
141. BCI(Brain Computer Interface)
142. 디지털 홀로그래픽 디스플레이(Digital Holographic Display)
143. 홀로그래피(Holography), 홀로그램(Hologram)
144. DVFS(Dynamic Voltage and Frequency Scaling)
145. CPU의 동작을 감시하는 워치독 타이머(Watchdog Timer)에 대하여 기술하고 하드웨어 구현 방법을 설명하시오.
146. 아래 System과 같이 메인(Main) CPU에서는 주 프로그램이 운용 중이고 보조 CPU에서는 Watchdog이 운용 중이라고 가정한다. 보조 CPU에서 동작될 수 있는 Watchdog Timer의 동작과정을 기술하시오.

## PART 6 논리회로
147. 논리 Gate의 종류
148. MUX(Multiplexer)와 DEMUX에 대해 설명하시오.
149. 밀리머신(Mealy Machine)과 무어머신(Moore Machine)
150. 카노프 맵(Karnaugh Map)
151. 세 변수맵을 이용하여 다음 부울식 간소화
152. 주어진 부울함수에 대해 카노프맵을 사용하여 간소화
153. 논리회로(소자)에서 Setup Time과 Hold Time
154. 논리회로에서 Fan-in, Fan-out 개념
155. Open Collector와 Open Drain
156. 논리회로에서 풀업(Pull-Up)과 풀다운(Pull-Down) 레지스터
157. CMOS와 TTL에 대해 설명하고 비교하시오.
158. CMOS와 TTL의 잡음여유도에 대해 설명하시오.
159. 조합논리회로와 순차논리회로에 대해 설명 및 비교하시오.
160. 논리회로에서 Latch와 Flip-Flop
161. 논리회로에서 래치(Latch)와 플립플롭(Flip-Flop)에 대해 설명하시오.
162. 플립플롭(Flip-Flop)의 4가지 종류에 대해 도식화한 후 설명하시오.
163. RS Flip-Flop에서 R=1, S=1일 때 불확실 또는 부정이 발생하는 원인
164. 3상태 버퍼(Three State Buffer)의 활용 방안
165. 3상태 버퍼를 이용하여 2-to-1 MUX 설계
166. 정적-1 해저드(Hazard)의 발생 예, 설명, 제거하기 위한 방법
167. RS, JK, D, T 플립플롭의 여기표와 특성 방정식
168. 16x4 RAM Chip 두 개를 활용하여 16x8 Bit 회로를 구성
169. 입력변수 X, Y, Z에 대한 조합 논리 회로 설계 (문제 참조)
170. 부울대수(Boolean Algebra)의 규칙을 활용하여 아래의 부울함수를 간략화하고 구현된 회로를 작성하시오.
171. 부울대수(Boolean Algebra)의 규칙을 활용하여 아래의 부울함수를 간략화하시오.
172. F(A, B, C)=Σ(1, 2, 3, 4, 5, 7)에 대하여 NAND Gate를 이용한 Logic Diagram을 도식하시오.
173. 8bit 데이터 버스와 14bit 주소 버스로 구성된 Micro-System 회로 구현
174. Positive Edge Triggered J-K Flip-Flop을 사용하여 상태 순차 000,001,011,100을 반복하는 동기식 Counter를 설계하시오. 단, 3상태 101,110,111이 발생하는 경우에는 다음 상태에서 000이 된다.
175. J-K Flip Flop을 사용하여 아래 3-Bit 2진 Counter를 설계하시오.
176. JK Flip Flop을 사용하여 아래와 같이 주어지는 상태도에 대해 Counter 회로를 설계하시오(미사용 상태인 010, 100상태에 대해서는 Don’t Care 상태로 처리하시오).
177. 8Bit데이터(Data) Bus와 16Bit Address Bus로 구성되는 마이크로컴퓨터 시스템에서 아래와 같은 조건으로 기억장치를 설계하고자 한다. 회로를 설계하시오.
178. Programmable Switch(프로그래머블 스위치)인 PLA, PAL, CPLD, FPGA에 대해 설명하시오.
179. FPGA의 개념, 구성 그리고 CPLD와 비교
180. ASIC(Application Specific Integrated Circuit)의 종류와 설계과정, 설계방법론
181. 하드웨어(Hardware) 설계 방법 중에 하나인 VHDL에 대해 설명하시오.
182. PLL(Phase Locked Loop)
183. Ripple Carry Adder보다 빠른 가산기 3가지
184. Clock Skew
185. Crosstalk 현상의 개념, 원인, 해결책, 사례 그리고 최근 이슈

## PART 7 컴퓨팅(Computing)
186. MTBF, MTTF, MTTR, MTFF에 대해 설명하시오.
187. SPEC(Standard Performance Evaluation Cooperative)
188. 암달(Amdahl’s) 법칙(Law)
189. 암달(Amdahl’s) 공식을 활용한 시스템 성능향상도이다. 시스템 속도 향상 가능 부분은 아래와 같을 때 각각의 질문에 답하시오.
1) CPU Clock Speed를 2배로 가속했을 때 성능 향상은?
2) 부동소수연산 가속기를 2배로 했을 때 성능 향상은?
3) 입출력(I/O) 속도를 2배(즉, BUS 구조, 캐쉬, 디스크 등 시스템 아키텍처를 최적화)로 했을 때 성능 향상은?
4) Network 속도를 2배로 증가했을 때 성능 향상은?
190. Grid Computing
191. Wearable Computing의 주요 기술과 해결 과제
192. 자가적응형 컴퓨팅(Self-Adaptive Computing)에 대해 기술하시오.
193. 자율 컴퓨팅(Autonomic Computing)
194. 클라우드 컴퓨팅(Cloud Computing)
195. 엣지 컴퓨팅(Edge Computing)
196. 엣지 컴퓨팅(Edge Computing)의 장단점과 적용 사례 및 보안 취약점
197. 상황인식 컴퓨팅(Context Aware Computing)
198. 양자컴퓨터의 특징과 양자컴퓨터와 기존 컴퓨터 간 비교 설명하시오.
199. 컴퓨터시스템의 성능평가 방법에 대해 설명하시오.
200. CPU 성능측정(CPU Utilization, Throughput, Turnaround Time, Waiting Time, Response Time)
201. CPU의 병행성(Concurrency)과 병렬성(Parallelism)
202. GPGPU(General Purpose computing on Graphics Processing Unit)
203. GPU(Graphic Processing Unit)와 CPU(Central Processing Unit)의 차이점
204. 정보시스템 하드웨어 규모 산정 지침(TTAKKO-10.0292/R2)에 따른 하드웨어 규모 산정 절차
205. TTA 기반으로 정보시스템의 H/W 용량을 산정하고자 한다. 다음에 대하여 설명하시오.
1) H/W 규모 산정 방법에 대한 개념 및 장단점
2) 규모 산정 대상
3) CPU 및 스토리지의 성능 기준치
206. 모바일 및 임베디드(Embedded) 시스템에 주로 이용되고 있는 ARM(Advanced RISC Machine) 프로세서에 대하여 다음 사항을 설명하시오.
가. ARM 프로세서의 특징
나. ARM 하드웨어 임베디드(Embedded) 시스템 아키텍처
다. ARM 소프트웨어 계층 구조
207. TPU(Tensor Processing Unit)
208. AI(인공지능) 반도체

# 2 운영체제
- 2022년 05월 30일
- https://www.yes24.com/product/goods/109856965

## Part 1. OS(Operating System)
1. 운영체제(Operating System)에 대해 설명하시오.
2. 운영체제(Operating System)(1교시)
3. 운영체제(Operating System)(2교시)
4. 운영체제의 기능과 역할에 대해 설명하시오.
5. Windows OS의 Booting 순서
6. 부트로더(Boot Loader)에 대해 설명하시오.
7. Process에 대해 설명하시오.
8. PCB(Process Control Block)
9. PCB(Process Control Block)와 TCB(Thread Control Block)
10. Thread에 대해 설명하시오.
11. Multi-Thread에 대해 설명하시오.
12. 멀티스레딩(Multithreading)의 개념과 종류에 대하여 설명하고, Latency와 Throughput 관점에서 장단점을 설명하시오.
13. 커널(Kernel)
14. 마이크로 커널(Micro Kernel)에 대해 설명하고 모노리틱 커널(Monolithic Kernel)과 비교
15. Embedded OS의 특징과 기능에 대해 설명하시오.
16. 실시간 시스템, 실시간(Real Time) 운영체제에 대해 설명하시오.
17. RTOS(Real Time OS)
18. 기술적 관점에서의 실시간 운영체제(Operating System) 도입, 선정 기준/절차 및 평가 방법
19. 실시간 시스템 구축에 있어 커널(Kernel)의 안전기능(Safety Function)을 정의하고 이를 평가하기 위한 핵심 시험 대상 및 항목에 대해 설명하시오.
20. Tiny OS(운영체제) 구조와 Kernel Scheduler에 대해 설명하시오.
21. 그린 운영체제(Green Operating System)에 대해 설명하시오.
22. 운영체제 다중 프로그래밍 환경에서 이중 모드(Dual mode) 구조에 대하여 설명하시오.
가. 이중모드 개념
나. 이중모드의 구조
다. 이중모드의 종류
23. 운영체제(OS)에서의 인터럽트(Interrupt)를 정의하고 동작원리를 설명하시오.
24. 운영체제(operating system)에서 발생할 수 있는 클럭 인터럽트(clock interrupt), 입출력 인터럽트(input/output interrupt), 페이지 부재(Page Fault)의 경우에 대하여 운영체제가 하는 역할을 설명하시오.
25. Process 간 Data통신 IPC(Inter Process Communication)의 4가지 유형 및 비교
26. IPC(Inter Process Communication)

## Part 2. Unix 및 Linux 운영체제
27. 유닉스(Unix) 운영체제(Operating System)
28. Unix 운영체제 부팅(Booting) 과정
29. Unix 파일 시스템(File System)
30. Unix File System에서의 i-node
31. Unix File System의 개념, 구조, 특징 및 inode에 대해 설명하시오.
32. Unix 커널 내에서 파일을 관리하기 위한 자료구조로 inode를 사용한다. Inode 내에서 데이터 블록을 관리하는 방법에 대하여 설명하시오.
33. 유닉스(Unix) 운영체제에서 슈퍼 블록(Super block)이 관리하는 자료들에 대하여 설명하시오.
34. Unix OS(운영체제)에서 Process 상태전이도를 도식하고 설명하시오. (단, Process 상태전이도에는 User Mode, Kernel Mode, Ready 상태, Blocked 상태, Suspended Read, Suspended Blocked 상태, Zombie 상태가 포함되어야 함)
35. Unix System Call 동작 과정을 설명하시오.
36. 프로그램에서 fork() 함수를 통한 시스템 호출(System call)과정을 사용자 모드와 커널 모드로 구분해서 설명하시오.
37. Unix System에서 umask의 의미 및 설정 방법
38. Unix System에서 사용되는 umask에 대해 설명하시오.
39. Unix에서 적용되고 있는 파일 접근제어 메커니즘(Mechanism)을 설명하시오.
40. Unix 시스템의 3가지 핵심 컴포넌트(Component)
41. Unix 파일 시스템의 구조 및 /etc/passwd 파일의 구성에 대하여 설명하시오.
42. Unix 시스템의 IPC(Inter-Process Communication) 4가지 유형 및 활용 분야
43. Linux OS(Operating System)
44. Linux Kernel
45. Linux(리눅스)에서 사용되는 스핀락(Spin-Lock)에 대하여 설명하시오.
46. 저널링(Journaling) File System
47. Linux, Journaling File System에 대해 설명하시오

## Part 3. 스케줄링(Scheduling)
48. CPU Scheduling에 대해 설명하시오.
49. CPU 스케줄러의 종류에 대해 설명하시오.
50. 운영체제에서 Process의 5가지 상태(State)에 대하여 설명하시오.
51. CPU 스케줄링에는 선점 및 비선점형 스케줄링으로 분류된다. 각각 설명하시오.
52. 선점형 스케줄링(Preemptive Scheduling
53. 다음 프로세스(Process) 상태전이도에 대하여 질문에 답하시오.
가. (a), (b), (c), (d)에 대하여 각각 설명하시오.
나. (b), (c)가 일어나는 이유에 대하여 설명하시오.
54. Round Robin 스케줄링 기법(Process 도착 시간을 고려)
55. Fixed Time Slice 알고리즘에 대해 설명하시오.
56. 아래 주어진 표에서 Job의 종류를 J1 J2 J3 순으로 실행 시 39초가 소요되는 원인과 Job 실행 순서를 변경했을 때의 시간을 각각 구하고, 적절한 스케줄링 시 몇 초까지 실행시간을 단축할 수 있는지 논리적으로 설명하시오
57. 비선점 스케줄링 방식인 FCFS와 SJF의 동작 원리를 설명하시오.
58. 아래 Table 상황에서 SRT(Shortest Remaining Time) 스케줄링 알고리즘을 사용하여 평균 대기시간과 평균 반환 시간을 구하시오.
59. MLQ(Multi-Level Queue)와 MLFQ(Multi-Level Feedback Queue)를 설명하시오.
60. CPU 스케줄링 알고리즘에 대하여 설명하시오.
가. SJF(Shortest Job First)와 HRN(Highest Response-ration Next)
나. MLQ(Multi Level Queue)와 MLFQ(Multi Level Feedback Queue)
61. SJF(Shortest Job First) 방식에서 기아현상(Starvation)을 HRN(Highest Response Ratio Next) 방식으로 해결됨을 증명하시오.
62. 스케줄링 기법 중 SJF(Shortest Job First), SRT(Shortest Remain Time First)의 개념과 차이점을 기술하고, 아래 그림(테이블)에서 SJF와 SRT의 평균대기시간을 구하고, SJF와 SRT의 평균대기시간을 비교하시오. (단, 버스트시간이 동일한 경우는 먼저 도착한 Process가 먼저 실행됨
63. Round Robin(도착시간 고려하지 않아도 됨) 스케줄링
64. 우선순위(Priority) 기반 CPU 스케줄링 알고리즘에 대하여 설명하시오.
65. 우선순위(Priority) 스케줄링에서 기아현상(Starvation) 발생 예시와 방지 방법에 대해 설명하시오.
66. 우선 순위 역전(Priority Inversion) 발생 원인에 대해 설명하시오.
67. 우선 순위 역전(Priority Inversion) 방지 방법에 대해 설명하시오.
68. 우선순위 역전(Priority Inversion)의 발생 원인과 해결 방안에 대해 설명하시오.
69. 라운드 로빈(Round Robin)과 EDF(Earliest Deadline First) 스케줄링
70. Hard Real Time 스케줄링 방식인 RM(Rate Monotonic)과 EDF(Earliest Deadline First) Scheduling에 대해 설명하시오. 아래 두 개의 Task로 RM과 EDF 스케줄링 시간을 도식화하시오.
71. RM(Rate Monotonic) 스케줄링과 EDF(Earliest Deadline First) 스케줄링 알고리즘
72. RM(Rate Monotonic) 스케줄링 알고리즘을 설명하고 다음 3개의 태스크(Task)를 스케줄링하시오. (단, 시간:0~20시간, 각 태스크들은 매 주기마다 릴리스(Release) 된다고 가정한다)
73. HDD(Hard Disk Drive)의 Disk Access Time에 대해 설명하시오.
74. NCQ에 대해 설명하고 HDD의 Disk 스케줄링 기법 6가지에 대해 기술하시오
75. 디스크 스케줄링 알고리즘의 동작과정을 스캔(SCAN), 룩(Look) 알고리즘 중심으로 설명하고, 다음에 주어진 “디스크 대기 큐” 내의 순서를 활용하여 스캔 알고리즘의 디스크 헤드(Head) 움직임을 설명하시오. (단, 현재 헤드(Head)는 트랙 50에 있으며 트랙 0번 방향으로 이동 중이다)
76. 디스크 스케줄링 알고리즘 중 최소 탐색 우선 스케줄링(Shortest Seek-Time First Scheduling)의 문제점을 해결하기 위한 알고리즘을 제시하고 엘리베이터 알고리즘(Elevator Algorithm)과 에션바흐 기법(Eshenbach Scheme)을 비교하여 설명하시오.
77. 디스크 스케줄링 기법 중 SLTF(Shortest Latency Time First), SPTF(Shortest Positioning Time First), SATF(Shortest Access Time First) 기법에 대해 설명하시오.

## Part 4. 프로세스 동기화(Process Synchronization)와 문맥 교환(Context Switching)
78. 세마포어(Semaphore) 연산에 대해 기술하시오.
79. 세마포어(Semaphore)와 모니터(Monitor)의 상호관계를 설명하시오.
80. 계수형 세마포어(Semaphore)에 대하여 설명하시오.
81. 뮤텍스(MUTEX)
82. Semaphore, MUTEX
83. 모니터(Monitor) 프로세스 동기화
84. 세마포어(Semaphore)를 이용한 리소스 공유 방법과 태스크 간 동기화 방법
85. 동기화 기법인 스핀락(Read / Write Spin Lock)의 개념을 기술하고 스핀락을 활용하는 방법을 사례를 들어 설명하시오.
86. 운영체제의 크리티컬 섹션(Critical Section) 구현 방법 2가지
87. 은행가 알고리즘(Banker’s Algorithm)
88. 교착상태(Dead Lock)의 개념과 교착상태를 회피하기 위한 은행가 알고리즘(Banker’s Algorithm)의 개념 및 자료구조를 설명하시오.
89. 교착상태(Dead Lock)의 발생 원인과 해결 방안에 대해 설명하시오.
90. Deadlock과 Livelock
91. 분산처리시스템에서 Mutual Exclusion을 구현하기 위한 Time Ring 알고리즘과 Time Ordering 알고리즘의 동작을 설명하시오.
92. 운영체제(OS)에서의 상호배제(Mutual Exclusion) 개념을 설명하고 이를 구현하는 방법을 하드웨어(Hardware)적 해결 방안 및 소프트웨어적 해결 방안으로 구분하여 설명하시오.
93. 병렬컴퓨터 프로세서 동기화와 상호배타 방식을 설명하시오.
94. 자원할당그래프(Resource Allocation Graph)
95. 자원할당그래프에서 Wait-For그래프 형태로 변환하고 교착상태 탐지 후 예방 방법에 대해 설명하시오.
P: Process(프로세스)
R: Resource(자원)
96. 경쟁조건(Race Condition)
97. Context Switching에 대해 설명하시오.
98. 운영체제에서 문맥(context)의 내용, 문맥 교환(context switch)의 과정 및 문맥 교환이 발생하는 조건을 설명하시오.
99. 운영체제 내부 모듈 중 Dispatcher의 주요 기능과 동작 과정을 도식화하여 설명하시오.
100. 다음은 마이크로 커널(Kernel)의 일부분이다. 알고리즘의 의미와 Context_Switch( ) 내부 메커니즘을 설명하시오.

## Part 5. Memory 제어 기술
101. 메모리 계층구조(Memory Hierarchy)
102. 메모리 관리 정책(Memory Management Policy)
103. Cache Memory에 대해 설명하시오.
104. 캐시 메모리 설계(Cache Memory Design)
105. Cache Write Policy(정책)에 대해 설명하시오.
106. Cache Miss
107. Cache Memory 설계 목표, 지역성(Locality)의 개념과 유형, 지역성의 활용 사례
108. 캐쉬 메모리(Cache Memory)를 별도로 가지고 있는 다중 프로세서 시스템에서 Write-Back 쓰기 정책 적용 시 Cache Memory 간의 Data 전송방법에 대해 설명하시오.
109. Cache 일관성(Coherency) 문제 원인, 해결책, 처리과정, 사례에 대해 설명하시오.
110. 캐시(Cache)서버를 이용한 웹 서버의 부하 분산방법에 대해 설명하시오.
111. 병렬 프로세서에서의 Cache 일관성 기법(MESI와 Cache Directory 기술)
112. 메모리 할당 기법인 First-Fit, Best-Fit, Worst-Fit 기법에 대해 설명하시오.
113. 내부 단편화와 외부 단편화에 대해 설명하시오.
114. 메모리 단편화의 발생 원인과 해결 방안을 설명하고 단편화를 최소화하기 위한 Buddy Memory Allocation 알고리즘에 대해 설명하시오.
115. Working Set과 Page Fault Frequency 비교
116. 메모리 관리기법 중 지역성(Locality)을 개념적으로 정리하고 시간지역성(Temporal Locality)과 공간지역성(Spatial Locality)에 대하여 설명하시오.
117. Thrashing의 발생 원인, 발견 방법, 해결 및 회피 방안에 대해 설명하시오.
118. 프로세스 스레싱(Thrashing)의 발생 원인과 예방책을 설명하시오.
119. 가상기억장치(Virtual Memory)에 대해 설명하시오.
120. 가상메모리(Virtual Memory)의 사용 이유에 대해 설명하시오.
121. Memory 할당 기법인 Paging 기법에 대해 설명하시오.
122. 가상메모리의 Paging 및 Segmentation 기법에 대해 설명하시오.
123. 운영체제에서 페이지 교체 알고리즘을 사용한다.
가. 페이지 교체 알고리즘을 사용하는 이유에 대하여 설명하시오.
나. 페이지 교체 알고리즘의 종류를 나열하고, 각 종류별 동작 과정에 대하여 설명하시오.
124. FIFO 방식의 페이지 교체 알고리즘과 SCR(Second Change - Chance Replacement)알고리즘을 사용하여 입력 Page 값이 2, 3, 2, 1, 5, 2, 4, 5, 3, 2, 5, 2순일 때 Page Fault 개수를 구하시오. (이때 프레임(Frame) 개수는 3으로 가정한다)
125. 벨라디변이(Belady’s Anomaly)와 SCR(Second Chance Replacement) 알고리즘
126. SCR(Second Chance Replacement)
127. 메모리 누수(Memory Leak)
128. 메모리 인터리빙(Memory Interleaving)의 개념과 활용 방식에 대하여 설명하시오.
129. Caching, Buffering, Spooling
130. Buffer와 Buffering 그리고 cache와 Caching의 개념, 시스템에서의 활용 예, 활용 시의 주의사항
131. Embedded System의 메모리 최적화 방안(HW 및 SW 측면)

## Part 6. C-언어 외
132. C언어에서의 지역변수에 대해 설명하시오.
133. C언어 Extern, Auto, Static, register 변수 Coding 각 변수 비교
134. C언어 Macro, Function, Inline의 Coding, 공통점, 차이점, 장단점을 기술하시오.
135. Module화 기법인 Macro, Function, Inline 각각의 개념을 공통점, 차이점, 장단점 위주로 설명하고 Embedded S/W 개발 환경에서의 활용 지침을 제안하시오.
136. Processor의 주소 지정 방식의 유형 분류, 이를 이용하여 C 언어 등 Programming 언어의 지역(자동) 변수 개념을 설명하시오.
137. 블록(Block)의 크기가 프로그램(Program)에 미치는 영향에 대해 설명하시오.
138. CPU 명령어 형식과 CPU 명령어 Cycle(Instruction Cycle)
139. CPU 처리 시의 병행성(Concurrency)과 병렬성(Parallelism)을 비교하시오.
140. 동적 연결 라이브러리(Dynamic Linking Library)
141. 제작된 Mobile App.을 신규로 App. Store에 등록하기 위한 절차와 Code서명 인증 발급 방법
142. Mobile App.(Native, Web, Hybrid App.)의 분류 및 특징을 설명하시오.
143. Android OS 적용, 개발 방법에서 SDK, NDK, PDK개발 방법에 대해 설명하시오.
144. OSS(Open Source S/W) 거버넌스(Governance)에 대해 설명하시오.
145. ISP(In System Programming)에 대해 설명하시오

## Part 7. I/O 제어 및 신기술
146. 버스 중재 개념, 신호, 직렬식, 병렬식, 점대점 방식에 대해 설명하시오.
147. 버스 중재 기법인 데이지체인(Daisy Chain)에 대해 설명하시오.
148. Interrupt 구동 IO 방식과 Programmed IO 방식에 대해 설명하시오.
149. 운영체제에서 I/O 디바이스(Device)를 위한 Polling 방식과 Interrupt 방식을 설명하고 장단점을 비교(Interrupt는 데이지체인(Daisy Chain) 방식을 고려하시오)
150. Application과 Kernel 통신방법에서 Non Blocked I/O와 Blocked I/O에 대해 비교하시오.
151. Application과 Kernel 간 비동기 I/O(Asynchronous I/O) 제어 방식에 대해 설명하시오.
152. Embedded System 개발을 위한 Cross Development(교차 개발) 환경과 Debugger의 종류
153. Embedded System과 Embedded Software의 특성
154. 자동차용 Embedded System 기술에 대해 설명하시오.
155. Clustering과 HA(High Availability)에 대해 비교하여 설명하시오.
156. 파레토(Pareto) 법칙이 소프트웨어 공학과 운영체제에서 어떻게 활용되고 있는지 설명하시오.
157. UEFI(Unified Extensible Firmware Interface)에 대해 설명하시오.
158. System Tuning 절차와 방법에 대해 설명하시오.
159. XIP(eXecution In Place)에 대해 설명하시오.
160. Cloud Computing 표준화 동향 및 전략에 대해 설명하시오.
161. Cloud Computing의 스토리지 가상화에 대해 설명하시오.
162. Mobile Cloud에 대해 설명하시오.
163. VDI(Virtual Desktop Infrastructure)
164. TMR(Triple Modular Redundancy)
165. System(SMP 서버 및 저장장치) 증설이 필요할 경우 성능분석과 용량산정 시의 고려사항
166. UI(User Interface)와 UX(User Experience)를 비교하고 UX의 기술적인 요소
167. Computer의 성능을 측정하기 위한 Throughput, Turnaround Time, Response Time을 설명하시오.
168. Computer 시스템의 신뢰도 향상을 위해 사용되는 방법 중의 하나인 체크포인팅(Check Pointing) 전략(Strategy)에 대해 설명하시오.
169. Cloud 운영체제, Open Stack에 대해 설명하시오.
170. 도커(Docker)에 대해 설명하시오.
171. 유니커널(Unikernel) 기반의 클라우드(Cloud) 운영체제
172. Micro-Service, MSA(Micro-Service Architecture)
173. 가상화(Virtualization)에 대해 설명하시오.
174. 컨테이너(Container) 가상화
175. 하이퍼바이저(Hypervisor)의 두 가지 유형에 대해 설명하시오.
176. 메타버스(Metaverse)

# 3 네트워크
- 2023년 11월 01일
- https://www.yes24.com/product/goods/123400058

## PART 1 데이터통신
1. 통신 5대 구성요소와 캐스팅 모드(Casting Mode)
2. 캐스팅 모드(Casting Mode)
3. 단방향, 반이중 및 전이중 통신
4. 패킷교환방식에서 가상회선교환과 데이터그램 방식
5. 정보통신 용어 및 교환 방식 설명
가. 두 사람이 대화할 때 나타나는 문제점이다. 각 경우에 대해서 보기와 같이 문제점을 해결하는 방향으로서 통신 용어로 설명하시오.
나. 회선교환(Circuit Switching)방식과 패킷교환(Packet Switching)방식의 차이점
6. OSI 7 Layer
7. OSI(Open Systems Interconnection) 7 모델의 각 계층별 특징, Data Type, 장비 및 프로토콜
8. OSI(Open System Interconnection) 7 Layer와 TCP/IP
9. 통신망(Communication Network)장치들의 물리적 구성 형태 및 각각의 특징
10. 인터네트워킹(Inter-Networking)
11. 통신시스템 5대 구성요소와 OSI 7 Layer 중 하위 3개 계층의 각각 역할
12. OSI 7계층 중 1계층에서 동작하는 Network 장비인 허브(Hub)와 리피터(Repeater)
13. 캡슐화(Encapsulation)와 역캡슐화(Decapsulation)
14. 계층(Layer)구조의 통신 프로토콜 설계 시 고려해야 할 다음 각 요소를 설명하시오.
가. 오류제어
나. 흐름제어
다. 데이터 전달 방식
15. OSI 참조 모델 2계층 오류제어 방식
16. TCP/IP 모델의 설명 및 각 계층별 프로토콜 종류
17. SAP, SDU 및 PDU
18. 네트워크 스위치(Network Switch)가 가져야 할 기술요소
19. L2 스위치(Layer 2 Switch)
20. L3 스위치(Layer 3 Switch)
21. L3, L4, L7 스위치
22. L4 스위치에 대하여 아래 사항을 설명하시오.
가. L4 스위치 SLB(Server Load Balancer) 동작 방식
나. L4 스위치 서버 상태 감시 방식
다. L4 스위치 장애 사례와 대응방안
23. L4 스위치와 L7 스위치 비교
24. 네트워크 스위치(Network Switch)
(1) 스위치의 개요
(2) OSI(Open System Interconnection) 참조 모델의 레이어(Layer)에 대한 스위치 유형
(3) L4 스위치와 L7 스위치 비교
25. All IP
26. 네트워크 성능 산출 방법
27. 디지털 변조방식(ASK, FSK, PSK, QAM)
28. 대역확산(Spread Spectrum)
29. FHSS(Frequency Hopping Spread Spectrum)와 DSSS(Direct Sequence SS) 확산방식
30. 드론(Drone)과 사용자 간의 무선통신을 위해 신호 다중화 기술 중 FHSS(Frequency Hopping Spread Spectrum)와 DSSS(Direct Sequence Spread Spectrum) 통신방식을 활용하고 있다. 이와 관련하여 다음을 설명하시오.
가. 드론 무선통신을 위한 신호 다중화의 개요와 필요성
나. FHSS
다. DSSS
31. 샤논(Shannon)의 통신모형
32. SDM(Space Division Multiplexing)과 TDM(Time Division Multiplexing)
33. 베이스밴드(Base Band)의 유형과 맨체스터(Manchester) 방식
34. PCM(Pulse Code Modulation) 동작원리
35. QAM(Quadrature Amplitude Modulation)
36. 전송 부호화기법의 소스코딩(Source Coding), 채널(Channel)코딩, 라인(Line)코딩)
37. 다중화(Multiplexing) 기술 설명과 CDMA 방식과 OFDMA 방식
38. OFDM(Orthogonal Frequency Division Multiplexing)과 OFDMA 동작원리, 특징 비교, 활용 및 적용 분야
39. 비직교 다중접속(NOMA, Non-Orthogonal Multiple Access)
40. RS(Recommended Standard)-232C
41. 순환중복검사(CRC, Cyclic Redundancy Check)의 개념과 아래 CRC를 고려한 전송 조건에서 CRC 생성과정과 수신측에서의 확인 과정 기술
42. CRC(Cyclic Redundancy Check)의 원리를 기술하고 CRC－8=X8＋X2＋X＋1이고 데이터워드가 01101011일 때 코드워드를 계산하는 과정을 설명하고 그 결과가 옳음을 검증하시오.
43. CRC(Cyclic Redundancy Check)
44. BEC(Backward Error Correction)와 FEC(Forward Error Correction)
45. 콘볼루션 코드(Convolution Code)
46. LDPC(Low Density Parity Check) Code
47. Block Code와 Non-Block Code
48. 송신측에서 전송한 Data를 수신측에서 오류 검출 후 오류발생 시 송신측에 재전송할 것을 요구하는 방식의 종류에 대해 나열하고 방법과 특징을 설명하시오.
49. 코드 전송 시 발생하는 오류를 검출(Detection) 할 수 있을 뿐만 아니라 오류코드의 정정
(Correction)이 가능한 해밍코드(Hamming Code)에 대해 다음을 설명하시오.
가. 해밍코드의 구성
나. 해밍코드의 정정과정 및 정정 방법
다. 해밍코드의 활용사례
50. ARP(Address Resolution Protocol), RARP(Reverse ARP)
51. IEEE 802.3의 동작원리 및 프레임 구조
52. CSMA(Carrier Sense Multiple Access) 방식(1-Persistent, Non-Persistent, P-Persistent)
53. CSMA/CA(Collision Avoidance)와 CSMA/CD(Collision Detection)
54. VLAN(Virtual Local Area Network)
55. Network에서 다음 각 주소의 개념과 구조를 설명하시오.
가. IP 주소(Address)
나. MAC(Media Access Control) 주소
56. IP 주소 부족문제 해결방안
57. IPv6(Internet Protocol version 6)
58. Ipv6 주소의 구성 및 분류
59. Multicast
60. IP Multicast
61. Anycast
62. NAT(Network Address Translation)
63. Mobile Ipv4의 삼각라우팅 개념, 필요성, 보완방안
64. Mobile Ipv6 동작방식
65. Proxy Mobile Ipv6 구성과 동작과정
66. 리버스 프록시(Reverse Proxy)
67. API Gateway를 활용하여 정보시스템을 구축하고자 한다. API Gateway의 역할과 필요성, 주요 기능, 적용 시 고려사항과 적용 사례에 대하여 설명하시오.
68. 라우팅(Routing) 알고리즘의 종류
69. 유니캐스트(Unicast) 라우팅 프로토콜 구성과 대표 프로토콜을 설명하시오.
70. 멀티캐스트(Multicast) 라우팅 프로토콜 유형과 적용 방안
71. 애드훅(Ad-Hoc) 라우팅 프로토콜
72. FANET(Flying Ad-hoc NETwork)
73. 슬라이딩 윈도우(Sliding Window)의 동작방식과 사례
74. TCP(Transmission Control Protocol)
가. TCP 헤더(Header)
나. TCP 헤더에 포함된 제어 플래그(Control Flag)의 종류
75. TCP 전송 계층 프로토콜에 대해 설명하시오.
가. TCP 전송 계층 개념
나. 3-way Handshake와 4-way Handshake 설명
다. TCP와 UDP 비교
76. TCP Wrapper
77. TCP와 UDP의 특징 비교
78. TCP 혼잡제어의 동작원리와 핵심기술
79. UDP(User Datagram Protocol)가 제공하는 서비스
80. SCTP(Stream Control Transmission Protocol)의 패킷구조와 동작방식
81. Internet QoS
82. NP, QoS, QoE의 비교 및 품질측정 방법
83. IntServ, DiffServ 정의, 구성 및 비교
84. WFQ(Weighted Fair Queuing)
85. NMS(Network Management System)
86. SNMP(Simple Network Management Protocol)의 동작원리와 연산자
87. Active FTP와 Passive FTP의 차이점
88. HTTP 및 HTTP의 keep alive
89. RTSP(Real-Time Streaming Protocol)의 세션수립 과정과 주요 기능
90. RTP(Real-Time Protocol)의 개념과 헤더구조
91. RTCP(Real-Time Control Protocol)의 개념과 동작방식
92. DHCP(Dynamic Host Configuration Protocol)
93. DHCP(Dynamic Host Configuration Protocol) IP 주소할당과정
94. 네트워크(Network)에서의 Non-Blocking I/O(Input/Output)
95. 네트워크(Network)에서의 Non-Blocking I/O(Input/Output)와 Blocked I/O
96. ISP(Internet Service Provider)로부터 191.192.9.0 C Class Network ID 하나를 할당받았다.(Ipv4에 해당) 회사에서는 6개의 물리적 Network로 나누었다. 6개 네트워크를 지원하기 위한 Subnet ID와 각 Subnet 별 Host ID의 범위를 구하시오.(해당 IP는 문제의 풀이과정으로만 적용되는 예제 IP임)
97. 네트워크 서브네팅(Subnetting)과 관련하여 아래 사항들을 설명하시오.
1) 수퍼네팅(Supernetting)과 서브네팅(Subnetting) 개념
2) 192.168.100.0/24 네트워크 대역을 동일한 IP 개수를 가진 4개의 서브넷(Subnet)으로 분할하고자 한다. 해당 절차에 대해서 상세히 설명하고, 서브넷 마스크 값을 구하시오. 그리고 하나의 서브넷에서 할당 가능한 IP 수량을 제시하시오.
98. 인터넷에서 subnet 개념이 적용된 배경을 설명하고, subnet mask 255.255.255.224인 네트워크를 예로 들어 subnet을 설명하시오.
99. 192.168.4.0~192.168.7.0/24 IP대역을 슈퍼네팅하여 NW ID, Subnet Mask, 유효 IP호스트 수를 산출하시오.
100. 소켓(Socket) 통신
101. TCP Socket 함수(Function)
102. UDP Socket Function
103. Web Socket Function

## PART 2 무선통신
104. WLAN(Wireless Local Area Network)
105. ISM(Industrial, Science, Medical) Band
106. IEEE 802.11ac
107. IEEE 802.11ad(WiGig)의 프로토콜 구조와 경쟁기술 비교
108. IEEE 802.11af(Super Wi-Fi)의 동작원리
109. IEEE 802.11ax와 IEEE 802.11be 비교
110. IEEE 802.11i의 개념, 보안과정 및 주요 기술
111. Miracast
112. Wi-Fi Direct
113. WPAN(Wireless Personal Area Network)의 Bluetooth, UWB 및 Zigbee 비교(1교시형)
114. WPAN의 관련 표준과 UWB, Bluetooth, Zigbee, Binary CDMA(2교시형)
115. Bluetooth의 구성 방법과 연결동작
116. Bluetooth의 4.0 LE(Low Energy)
117. Zigbee 통신
118. UWB기술, MB-OFDM 및 DS-CDMA UWB 비교
119. 6LoWPAN의 등장배경과 프로토콜 구조
120. WiBEEM(Wireless Beacon-enabled Energy Efficient N/W)의 개념과 구성
121. Binary CDMA
122. NFC의 개념, 특징 및 RFID와 비교
123. D2D(Device to Device) 통신
124. 단말 간 직접통신(Device to Device Communication)의 운용 시나리오 3가지와 활용 분야
125. IEEE 802.15.3c의 프레임 구조
126. WBAN(Wireless Body Area Network)의 서비스 구조, 핵심기술 및 활용사례
127. LiDAR(Light Detection And Ranging)와 RADAR(Radio Detection And Ranging)

## PART 3 이동통신
128. MIMO(Multiple Input Multiple Output)의 개념, 구조 및 핵심기술
129. AMC(Adaptive Modulation and Coding)의 개념과 동작방식
130. Array Antenna의 개념과 종류
131. 핸드오버(Handover)의 유형과 비교
132. 핸드오버(Handover)와 로밍(Roaming) 비교
133. LTE-Advanced의 핵심기술
134. FMC(Fixed Mobile Convergence)와 FMS(Fixed Mobile Substitution)
135. 펨토셀(Femto Cell)
136. mVoIP의 등장배경, 서비스 유형 및 제공 유형
137. IMS(IP Multimedia Subsystem)의 구조와 계층별 기능
138. 5G 이동통신의 필요성과 관련 기술
139. 5G 네트워크 구성 및 핵심기술
140. 5G 특화망
141. 모바일 엣지(Edge) 컴퓨팅
142. 네트워크 슬라이싱
143. 6G 이동통신

## PART 4 정보통신망
144. CDN(Contents Delivery Network)
145. ADN(Application Delivery Network)의 개념과 주요 기능
146. MPLS(Multi-Protocol Label Switching)의 개요, 특징 및 FEC 구성
147. VPLS(Virtual Private Local Service)의 구조와 주요 기술
148. 무선 메쉬네트워크(Wireless Mesh Network)
149. VPN(Virtual Private Network)
150. VPN(Virtual Private Network)과 TOR(The Onion Routing)
151. 익명 네트워크(TOR)
152. Internet Exchange의 구축 유형과 운영 방식
153. VoIP(Voice over IP)의 개념, 구성도 및 관련 프로토콜
154. BCN(Broadband Convergence Network)의 구조와 계층별 주요 기술
155. WDM(Wavelength Division Multiplexing)
156. FTTH 개념, AON/PON 특징 및 구축 시 고려사항
157. SONET과 SDH의 통신방식과 프레임구조
158. 가시광 통신의 원리와 요소 기술
159. MVNO(Mobile Virtual Network Operators)의 개념, 유형 및 기대효과
160. 망중립성
161. 제로 레이팅(Zero Rating)
162. 최근 Netflix 등 CP(Contents Provider)들의 망 관리 비용을 요구하는 법제화 움직임이 일자 그들의 불만이 표시되고 있다. 망 중립성 이슈에 대하여 설명하시오.
가. 쟁점 사항 및 정책 이슈
나. 시사점 및 대응 방안
163. 업무용 망을 인터넷 망에서 분리하는 경우의 장단점과 그 구축 방안을 제시하고, 각 방안을 3가지 관점(보안, 성능, 비용)에서 비교하여 설명하시오.
164. 내부망과 외부망을 분리하는 망분리시스템에 대하여 다음을 설명하시오.
가. 망분리 개념 및 망분리 원칙
나. 망분리 구축 유형의 특징 비교
다. 망분리 방식의 장단점
165. Giga Korea 514
166. 라우터 Backbone 네트워크

## PART 5 응용서비스
167. 재난안전무선통신망의 요구기능과 후보기술
168. 재난발생 시 피해 절감을 위한 데이터 큐레이션(Data Curation) 분야와 주요 활동
169. 국내의 재난 및 안전관리가 매우 중요한 영역으로 부상하고 있다. 재난 및 안전관리를 위한 ICT 측면에서의 핵심기술
170. Smart Grid(스마트 그리드) Networking 기술
171. DNP(Distributed Network Protocol)의 개념과 동작원리
172. DTN(Delay Tolerant Network)
173. SDN(Software Defined Network)의 특징, 구조, 동작방식 및 표준화 동향
174. NFV(Network Function Virtualization)의 구성과 SDN과 비교
175. 네트워크 가상화기술인 VLAN(Virtual LAN), VPN(Virtual Private Network), NFV(Network Function Virtualization) 비교
176. CAN(Controller Area Network)의 특징, 핵심기술과 동작과정
177. DSRC(Dedicated Short Range Communication)
178. WAVE(Wireless Access Vehicular Environment)
179. BACnet(Building Automation Control Network)의 구조와 요소기술
180. DLNA(Digital Living Network Alliance)
181. uPnP(Universal Plug and Play)
182. 센서네트워크(Sensor Network)
183. 사물통신의 핵심기술
184. IoT(Internet of Things)
185. MQTT(Message Queuing Telemetry Transport)
186. IoE(Internet of Everything)의 구성과 구성요소
187. 멧칼프의 법칙(Metcalfe’s Law)
188. 웹 접근성(Web Accessibility)
189. 다크 웹(Dark Web)
190. 네트워크 스캐닝(Network Scanning)
191. DAS(Direct Attached Storage), NAS(Network Attached Storage), SAN(Storage Area Network)
192. 양자정보통신에서의 양자(Quantum) 특성
193. 휴대용 전자기기 및 전기 자동차 등의 확대로 인해 무선으로 전력을 전송하여 배터리를 충전하는 무선충전기술이 주목받고 있다. 이와 관련하여 다음을 설명하시오.
가. 무선충전기술의 개요
나. 무선충전기술 유형별 사용 주파수, 전송 거리 및 효율, 인체 유해성, 주요 사용 분야 측면에서 비교
다. 무선충전기술 사용에서 발생 가능한 보안 문제점

# 4. 보안
- 2023년 06월 21일
- https://www.yes24.com/product/goods/119664215

## PART 1 정보보호
1. 데이터(Data)와 정보, 정보의 특성
2. 정보보호의 목표
3. 정보기술의 구성요소와 정보화 사회의 특성, 정보화의 역기능
4. 정보보호의 필요성
5. 정보보호(Information Security)의 위험 요소
6. 변조(Modification)와 위조(Fabrication)
7. 정보보호의 대책
8. 정보보호의 조건, 위협형태, 보안체계
9. 정보보호의 범위, 기술의 분류
10. 능동형 보안구조(Adaptive Security Architecture)
11. 융합보안(Convergency Security)
12. 엔드포인트 보안(Endpoint Security)
13. OSI 보안구조인 X.800
14. NIST(미국 산업 표준 기관)에서 제시한 정보 보안의 핵심 원칙
15 보안 순환 사이클(Cycle)
16. 보안 프레임워크(Framework), 위협 대응 절차
17. 정보보안에서 저지통제(Deterrent Control), 탐지통제(Detective Control), 교정통제(Corrective
Control), 예방통제(Preventive Control)
18. 정보보안의 주요한 세 가지 목적 및 각각의 목적을 위협할 수 있는 공격방법
19. 업무에서 발생하는 정보 유출을 DBMS, 네트워크, 파일(또는 문서) 등 사고 유형과 이를 안전하게 유지하기 위한 보안 기술
20. 보안 거버넌스(Security Governance)
21. 국제표준(ISO)에 준하여 정보보호 거버넌스의 6대 원리, 핵심 프로세스 및 주요 구성요소

## PART 2 암호학
22. 암호화
23. 암호 방식의 발전 과정(고대, 근대, 현대)
24. 현대 암호학의 수학적 이론들
- 약수&배수, 최대공약수, 서로소, 유클리드 호제법, 소수(소인수 분해), 모듈러 연산, 잉여계, 오일러의 정리, 페르마의 정리
25. 암호학에 적용되는 유클리드 호제법(Euclidean Algorithms)의 원리를 증명, 이 원리를 이용하여 (252, 198)의 최대 공약수를 구하시오.
26. 페르마 소정리를 이용하여 연산이 성립함을 보이시오.
27. 암호 기법 - 치환, 전치, 적(product) 암호방식
28. 블록(Block)암호기법과 스트림 암호(Stream Cipher) 기법
29. 대칭키와 비대칭 Key 암호 방식
30. 현대 암호학의 기초, Feistel 암호의 구조와 암호화와 복호화 과정
31. Feistel 암호 구조에서 f함수와 S-Box
32. 블록암호, Feistel 암호구조와 SPN(Substitution Permutation Network) 비교
33. AES(Advanced Encryption Standard) 암호화
34. 국산 암호화 알고리즘, SEED
35. 국산 암호화 알고리즘, ARIA(Academy Research Institute Agency)
36. DES와 AES 암호의 장단점
37. 블록(Block)암호화 기법에서 ECB 모드와 CBC 운용모드의 동작 및 장단점
38. 블록암호모드(Block Cipher Mode)-ECB(Electric Code-Book) Mode
39. CBC(Cipher Block Chaining) Mode
40. 다음 구성요소를 활용하여 블록암호모드-CFB(Cipher Feedback) Mode의 암복호화 과정을 설명하시오.
41. OFB(Output Feedback) Mode
42. CTR(CounTeR) Mode
43. 공개키 암호화 방식(암호기법 분류)
44. RSA공개키 암호방식에서 송신자 비밀키(p=7, q=11)이고 송신자의 공개키(Ke) 값이 13일 때, 수신자의 개인키(Kd)를 구하시오.
45. 공개키 암호화 방식을 설명하고 비밀키(p=3, q=11)이고 평문 M=5일 때, RSA 암호화 복호화 과정을 설명하시오.
46. 해쉬함수(Hash Function)의 특징
47. 해쉬값(Hash Value)과 해쉬함수의 구분, 종류, 용도
48. HMAC(Hash-based Message Authentication Code)
49. 메시지 인증 기법과 디지털 서명 기법에 대하여 설명하고 공통점과 차이점을 설명하시오.
50. 전자서명(Digital Signature)
51. 비대칭키(공개키 암호방식) 방식의 전자서명 방법
52. RSA 암호방식을 이용한 전자서명방식에 대해 2가지 이상 설명하시오.
53. 전자봉투(Digital Envelope)

## PART 3 보안 위협
54. 해킹(Hacking) 공격
55. 윤리적 해커(Ethical Hacker)
56. 해킹(Hacking)
57. 웜(Worm)
58. 트로이 목마의 특징, 공격유입, 동작과정, 비교, 해킹기법
59. 바이러스(Virus)
60. Malware
61. Malware(악성프로그램)의 유형, 대응 방안
62. Malware의 공격 유형, 예방
63. Malware의 분석 및 탐지기법
64. 키로거(Key-Logger)
65. 스니핑(Sniffing)
66. Sniffing과 Spoofing
67. 아래 그림에서 ARP(Address Resolution Protocol) Spoofing 공격의 예시와 ARP Spoofing 공격의 대처 방안에 대해 설명하시오.
68 ARP Spoofing의 공격 탐지 및 대응 방안
69. IP Spoofing, ICMP Redirect, DNS Spoofing
70. 피싱(Phishing)
71. 액티브 피싱(Active Phishing)
72. 스피어 피싱(Spear Phishing)
73. 피싱(Phishing)과 파밍(Pharming)
74. 피싱(Phishing)의 공격 유형과 대응 방법
75. 파밍(Pharming)의 공격 유형과 대응 방안, Phishing과 비교
76. 익스플로이트 공격(Exploit Attack)
77. 랜섬웨어(Randsomware)
78. 랜섬웨어(Randsomware)와 파밍(Pharming)
79. 랜섬웨어(Randsomware) 공격에 대하여 사전, 사후적 대응 방안을 기술적, 관리적 관점에서 설명하시오.
80. 랜섬웨어(Ransomware)와 RaaS(Ransomware as a Service)에 대하여 설명하시오.
81. 스파이웨어(Spyware)
82. 멀버타이징(Malvertising)
83. 봇넷(Botnet)
84. 미라이 봇넷(Mirai Botnet)에 대하여 설명하시오.
1) 미라이 봇넷의 개념
2) IoT 서비스 생애주기별 보안 위협 및 해결 방안
3) IoT 공통보안 7대 원칙
85. DDoS의 공격 대응 방안(1교시형)
86. DDoS(2교시형)
87. 다음의 그림은 서비스 거부(DDoS, Distributed Denial of Service) 공격 사례이다. DDoS에 대하여 다음 내용을 설명하시오.
가. 위 사례의 공격기법 개념
나. 위 사례의 공격기법
다. 공격기법에 대한 보안 대책
88. DrDOS
89. PDoS(Permanent DoS)
90. 인터넷 Protocol에서 4단계 주소체계(Specific/Port/Logical/Physical Address)를 설명하고, 각 주소체계에서 발생할 수 있는 Spoofing의 위협
91. Rootkit(루트킷)
92. Session Hijacking(납치) Attack
93. APT(Advanced Persistent Threat) 공격기법과 대응 방안
94. DNS(Domain Name Server) Sinkhole
95. SQL Injection 공격기법
96. XSS(Cross Site Scripting), CSRF와 비교
97. CSRF(Cross-Site Request Forgery)
98. TCP와 UDP 차이점, 3-Way Handshaking, SYN Attack 해결 방안
99. Buffer Overflow (Sample Code 작성) 취약점 및 대응 방안
100. 메모리 해킹(Memory Hacking)
101. 기관 내부자에 의해 행해지는 보안 위협의 주요 행동적 특성
102. 좀비(Zombie) PC
103. 좀비(Zombie) PC의 탐지, 분석, 제거 방안
104. 스턱스넷(Stuxnet)
105. 다크 웹(Dark Web)
106. 악성 AP(Access Point)
107. 워 다이얼링(War-Dialing), 워 드라이빙(War-Driving)
108. Zero Day Attack
109. 소프트웨어 취약점을 이용한 공격에 대한 보안을 적용하기 위하여 개발 단계별 보안 기술을 적용하는 것이 필요하다. 소프트웨어 개발 단계별로 적용 가능한 보안 기술을 제시하고 이를 설명하시오.
110. 드론(Drone)의 보안 위협 및 대응 방안

## PART 4 기업 및 개인의 정보보호, 인증
111. 디지털 윤리(Digital Ethics)와 개인정보보호
112. 정보보호 관리 및 정책
113. 기업 정보보안
114. 정보보호의 필요성과 기업의 정보보호 시 장점
115. 정보보안관리에서의 중요 용어
116. ISO 27000 Family
117. ISMS-P 인증기준
118. ISMS-P 인증체계
119. ISO 27001(ISMS-Information Security Management System)
120. 정보보호 시스템 보안성 평가 인증 시 필요한 문서
121. CC평가 인증 절차 및 각 단계별 업무
122. CC(Common Criteria)
123. 개인정보영향평가(PIA: Privacy Impact Assessment)의 목적, 평가대상, 평가단계 및 평가 절차
124. PMS(Patch Management System)
125. 기업 정보보호 차원에서 위험 관리(Risk Management) 방안
126. 전사 보안 감독 위원회(Enterprise Wide Security Oversight Committee) 구성과 역할
127. CPO(Chief Privacy Officer)
128. CISO(Chief Information Security Officer)
129. OECD 개인 정보보호 8대 원칙
130. 최근 각 분야에서 개인정보 유출이 잇따르면서 경제협력개발기구(OECD)의 ‘프라이버시 8원칙’이 새삼 주목받고 있다. 이 8원칙은 개인정보의 수집 및 관리에 대한 국제사회의 합의를 반영한 국제 기준으로 법적인 구속력은 없지만 일반 원칙으로 인정받고 있다. 경제협력개발기구(OECD) 프라이버시(Privacy) 8원칙과 개인정보보호법을 비교 설명하시오.
131. 개인정보의 개념과 공공정보 공유 및 개방 시 개인정보 처리의 단계별 적용 원칙
132. ISO/IEC 27018
133. 최근 개인정보를 활용하는 서비스들이 증가하면서 개인정보에 대한 보호가 중요해지고 있다. 이와 관련하여 ISO/IEC 29100 프라이버시 11원칙과 ISO/IEC 27701 개인정보 보호시스템에 대한 인증 및 평가에 대하여 각각 설명하시오.
134. 개인정보 안전성 확보 조치
135. 개인정보 보호에 관한 아래 사항에 대하여 설명하시오.
가. 개인정보의 정의 및 유출 원인
나. 오남용 행위 탐지 시나리오 생성 방안별(4W1H, 데이터생명주기) 생성 기준 및 구성요소
다. 오남용 행위 탐지 시나리오 생성 방안별 사례 제시
136. 특정 개인의 프라이버시(Privacy)를 보호하면서도 그 개인의 정보를 사용하기 위해 설계된 방법의 하나인 PPDM(Privacy Preserving Data Mining)을 정의하고, 그 기법에 대하여 설명하시오.
137. 개인정보의 가명익명처리 기술
138. 프라이버시(Privacy) 보호 모델인 K-익명성
139. 개인정보보호 중심 설계(Privacy By Design)
140. CCL(Creative Commons License)
141. SSO(Single Sign On)(1교시형)
142. SSO(Single Sign On)(2교시형)
143. 접근통제(Access Control)의 물리적, 관리적, 기술적 통제 방안
144. 접근통제(Access Control)의 절차
145. 정보보안의 접근 통제 유형
146. 커베로스(Kerberos) 인증 프로토콜
147. AAA(Authentication, Authorization, Accounting)
148. 식별(Identification)과 인증(Authentication)에 대하여 다음을 설명하시오.
가. 개인 식별과 사용자 인증의 정의 및 차이점
나. 사용자 인증 시 보안 요구 사항
다. 인증 방식에 따른 4가지 유형 및 유형별 특징
149. 시도-응답 인증(Challenge-Response Authentication)
150. 생체인식기법의 특징과 다중 생체 인식 기술
151. I-PIN 2.0
152. PKI(Public Key Infrastructure)
153. Shadow IT
154. OTP(One Time Password) 구성요소, 동기/비동기 동작
155. Smart OTP(One Time Password)
156. CAPTCHA
157. DLP(Data Loss Prevention)
158. DRM(Digital Rights Management), DLP(Data Loss Prevention) 비교

## PART 5 네트워크 보안
159. 방화벽(Firewall)
160. WAF(Web Application Firewall)
161. 침입차단시스템(Firewall)의 구성 형태
162. 스팸 필터(Spam Filter)
163. 침입탐지시스템(IDS: Intrusion Detection System)의 실행 단계
164. 침입탐지시스템(IDS)을 사용하여 Suspicious(의심스러운) Packet 수집 방법
165. 비정상 침입탐지(Anomaly Detection)와 오용침입탐지(Misuse Detection)
166. 침입차단시스템(IPS)과 침입탐지시스템(IDS) 비교
167. VPN(Virtual Private N/W)의 적용 기술
168. VPN(Virtual Private Network)(2교시형)
169. VPN(Virtual Private Network) 구현 방식과 서비스 형태에 따라 비교하여 설명하고, SSL VPN 방식에 대하여 설명하시오.
170. IPSec의 AH및 ESP의 상세구조와 각 필드의 보안상 용도
171. SET(Secure Electronic Transaction)와 SSL(Secure Socket Layer)
172. EAM(Enterprise Access Management)
173. ESM(Enterprise Security Management)
174. UTMS(Unified Threat Management System)
175. RMS(Risk Management System)
176. 사이버 블랙박스(Cyber Blackbox)
177. Honey Pot의 동작원리, 구성, 주요 기능
178. TCP의 정상적인 3-Way Handshaking과 TCP SYN Attack 방법과 해결 방안
179. TCP SYN Attack에서 L7 스위치로 대응할 수 있는 방법
180. NAC(Network Access Control)(1교시형)
181. NAC(Network Access Control)(2교시형)
182. IAM(Identity Access management)
183. 지능형 CCTV
184. CCTV통합관제센터의 폐쇄회로화면(CCTV) 개인영상 정보보호 방안에 대하여 설명하시오.
185. SOAR(Security Orchestration, Automation and Response)의 개념 및 등장 배경, 구성요소, 주요 기능, 기대효과, 도입 시 고려사항에 대하여 설명하시오.
186. 사이버 킬 체인(Cyber Kill Chain)
187. 망 분리
188. 망 분리 보안(Security) 이슈(Issue)와 대응 방안

## PART 6 System 보안
189. TEE/SEE(Trusted Execution Environment/Secure)
190. TPM(Trusted Platform Module)
191. Trust Zone
192. 제로 트러스트(Zero Trust) 보안 모델
193. 보안 MCU(Security Micro Control Unit)
194. 무선 LAN(Local Area Network)의 보안 위협
195. 무선 LAN 보안(2교시형)
196. IEEE 802.11i
197. WIPS(Wireless Intrusion Preventing System)
198. Gray Hacker
199. Smart Work의 보안 이슈(Issue)와 이슈 대처 방안
200. 클라우드 컴퓨팅(Cloud Computing)
201. 클라우드 컴퓨팅의 멀티테넌시(Multi-Tenancy) 보안
202. ISO/IEC 27017
203. CSAP(Cloud Security Assurance Program)
204. DB(Data Base) 보안
205. Secure Coding
206. Software 보안 테스트 방법론
207. 운영체제에서 보안 커널(Kernel) 구현 전략 및 개발 방법
208. Smart Grid 보안
209. 파일 슬랙(File Slack)
210. 디지털 포렌식(Digital Forensics)
211. 컴퓨터(Computer) 포렌식(Forensic)
212. 스마트폰(Smartphone) 포렌식(Forensic)
1) 스마트폰(Smartphone) 포렌식 Data와 절차
2) 스마트폰 내의 Data 추출 방법
213. 침해사고 대응 측면과 디지털 감사(Audit) 측면에서 디지털 포렌식의 필요성을 설명하고, 디지털 포렌식 절차 및 활용되는 기술을 설명하시오.
214. 안티포렌식(Anti-Forensics)
215. OWASP(Open Web Application Security Project)-Web App. 보안
216. 스마트 팩토리(Smart Factory)의 보안 위협과 보안 요구사항을 제시하고, 각 보안 요구사항별 보안 대책에 대하여 설명하시오.
217. 회사 내 사이버보안 조직의 역할 및 책임사항을 평상시와 비상시로 구분하여 설명하시오.

## PART 7 전송 데이터의 무결성 확보
218. 해밍코드(Hamming Code)의 오류 검색과 수정방법, 활용 방안
219. 순방향 에러 발견(Forward Error Detection) 절차를 다이어그램, CRC(Cyclic Redundancy Check) 값을 구하는 과정
220. 2차원 짝수 패리티를 사용, 단일 비트 오류 발견(Detection)과 정정(Correction) 과정
221. Internet Checksum 생성 및 검증 과정

# 5 소프트웨어 공학
- 2024년 01월 10일
- https://www.yes24.com/product/goods/124489950

## PART 1. Software 공학
1. Software의 정의, 분류, 특성
2. Software의 개념, 유형
3. Software 위기와 이를 해결하기 위한 방안
4. Software 공학이란 무엇이며, SW 공학의 구성요소와 원리
5. IEEE 산하 SW 공학 표준 위원회에서 SW 공학의 근본 지식을 규정한 SWEBOK(SW Engineering Body Of Knowledge)
6. Software산업 육성 전략
7. Software의 설계 원리 중 모듈(Module)화
8. Software설계 원리에서 분할과 정복(Divide & Conquer)
9. Software 난독화(Obfuscation)
10. Software 재사용(Reuse)의 활용, 목적, 구현 방법
11. Software 관리를 위한 기준선(Baseline)
12. Module, Component, Service에 대해 각각 설명하고 비교하시오.
13. 임베디드(Embedded) Software
14. Software의 생산성 향상 기법인 역공학(Reverse Engineering)과 재공학(Re-Engineering)
15. Lehman의 Software 변화원리
16. Software 형상관리
17. 소프트웨어 정의(SDx)

## PART 2. Software 개발 모형(모델, 모범사례)
18. SDLC(SW Development Life Cycle)
19. 폭포수(Waterfall) 모델(Model)
20. 프로토타이핑(Prototyping) 모델(Model)
21. 나선형(Sprial) 개발 모델(Model)
22. 증분형(Incremental)과 진화형(Evolutional) 모델(Model)
23. RAD(Rapid Application Development) 모델
24. Clean Room 개발 모형(모델)에서 3가지 Box 구조
25. SDLC 모델 선정 기준과 각 모델의 상관 관계
26. SDLC(Software Development Life Cycle) 과정의 구현단계에서의 Action Item(Activity)과 일정지연이 발생되었을 때 PM(Project Manager) 입장에서의 대처방안
27. SDLC 과정에서 필요한 Review, Inspection, Walkthrough
28. 전통적인 S/W 개발 Model과 OSS(Open Source Software) 개발 Model의 차이점

## PART 3. S/W 개발 방법론
29. S/W 개발 방법론(구조적, 정보공학, 객체 지향, CBD 개발 방법론)
30. 폭포수 개발 방법론과 애자일개발 방법론의 특징 및 장단점 비교
31. Agile Process
32. S/W 개발 방법론인 Agile Methodology의 정의, 특성, 장단점
33. TDD(Test Driven Development)
34. SPL(Software Product Line)
35. XP(eXtreme Programming)
36. RUP(Rational Unified Process)
37. XP(eXtreme Programming)와 RUP 비교
38. SCRUM
39. MDD(Model Driven Development)
40. 모델 기반의 S/W 개발 방식, MDA(Model Driven Architecture)
41. DevOps(Development+Operation)
42. Kanban S/W 개발 방법론에 대해 설명하고 SCRUM 방법과 비교
43. CASE(Computer Aided Software Engineering)
44. 린(Lean) 개발 방법론
45. 모바일(Mobile) App.개발의 특성과 이슈에 대하여 설명하고 애자일(Agile)을 활용하여 모바일 개발환경에 적합한 개발 방법을 제시하시오.
46. 현재의 정보화 환경은 사용자가 다양한 단말(OPMD : One Person Multi Device)을 활용하고, 하나의 정보가 다양한 단말에서 활용(OSMU; One Source Multi Use)된다. S/W 개발 방법론에서 이를 반영할 수 있는 방안을 서술하시오.

## PART 4. UML(Unified Modeling Language)
47. Modeling을 정의하고 목적과 Software에서 Modeling이 필요한 이유
48. UML(Unified Modeling Language)에 대해 정의하고 특징과 개발 방법론과의 관계
49. S/W 공학에서 모델링(Modeling)의 개념과 모델링 언어로 UML이 필요 이유
50. UML(Unified Modeling Language)의 구성요소
51. UML의 구성요소 중 사물(Thing)의 세부내용
52. 모델링(Modeling)과 프로그래밍(Programming)을 비교하고 개발과정에서 적용되는 UML Diagram의 종류
53. UML의 4＋1 View 모형(Model)
54. UML의 4＋1 View Model을 설명하고 SDLC과정 적용
55. UML에서 관계(Relationship) 표시는 6가지(연관, 의존, 일반화, 실체화, 집합연관, 합성연관) 관계로 표시된다. 각각 설명하고 실생활에서 사용되는 예를 Notation(도식화)
56. 다음의 Class Diagram을 자바 Code로 작성하고 정보은닉에 사용된 접근 제어자에 대해 설명하시오.
57. 다음 Class Diagram을 자바(JAVA) Code로 변환하시오.
58. 다음 UML 시퀀스(Sequence) 다이어그램(Diagram)을 설명하고 JAVA Code로 구현하시오.
59. 다음의 구성 객체를 이용하여 Sequence Diagram으로 표시하시오(내용을 상세히).
60. 아래와 같은 전자계산기를 객체 지향 언어를 사용하여 생성하고자 한다. Class Diagram으로 표기하는 방법에 대해 설명하시오.
61. UML2.0(4계층과 4가지 영역 위주로)
62. S/W제품이 시장에 출시된 후 사용자로부터 예기치 않은 문제점이 있다고 Service Desk에 접수되었다. SLA(Service Level Management)에는 3일 이내에 개선 대응해야 한다고 명시되어 있다. 3일 이내에 Issue를 개선(Clear)하는 과정을 UML의 Timing Diagram으로 기술하시오(개선은 개발 담당자, 검증은 품질 담당자가 진행하며 각각 1일씩 소요된다고 가정한다).
63. 아래 Code에 대해 Class Diagram으로 표현하고 설명하시오.
64. 아래 시나리오를 기반으로 고객과 점주가 사용하는 주문 시스템에 대한 Use Case Diagram을 작성하시오.
가. 고객은 주문시스템을 통해 가격을 조회하고 주문할 수 있다.
나. 고객은 주문 시스템을 통해 주문 상태를 확인하고 주문을 취소할 수 있다.
다. 점주는 주문 시스템을 통해 주문 활동을 모니터링하고 창고를 관리할 수 있다.
라. 회계 시스템은 주문 시스템과 연동하여 주문이나 취소 처리할 수 있다.
65. 다음 주사위게임 유스케이스(Usecase)에 대하여 작성하시오.
- 참여자는 주사위게임을 수행한다. 주사위게임은 두 개의 주사위를 굴려서 결과를 보여준다. 주사위 앞면에 나온 값의 합이 8이면 이기는 것이고, 그렇지 않으면 진다.
가. 개념적 객체 모델(Conceptual Object Model)
나. 시퀀스 다이어그램(Sequence Diagram)
다. 클래스 다이어그램(Class Diagram)
66. UML의 확장 메커니즘(Extensibility Mechanism)
(Stereotype 사용에 대해 예를 들어 설명하시오.)
67. 아래 UML의 스테레오(Stereotype)를 JAVA 언어로 Coding하고 많이 사용되는 Stereotype 3가지 이상 나열해서 설명하시오.
68. UML의 State Machine Diagram에 대해 설명하고 엘리베이터(Elevator)의 예를 들어 State Machine Diagram으로 표시하시오.
69. UML의 연관(Association) 관계와 방향성이 있는 연관(Directed Association)에 대해 예를 들어 설명하고 Directed Association에 대해서는 예제 상황을 들어 Coding하시오.
70. UML의 일반화(Generalization) 관계에 대해 예제 상황을 들어 설명하고 Coding하시오.
71. UML의 실체화(Realization) 관계에 대해 예제 상황을 들어 설명하고 Coding하시오.
72. UML의 의존(Dependency) 관계에 대해 예제 상황을 들어 설명하고 Coding하시오.

## PART 5. 디자인 패턴(Design Pattern)
73. 디자인 패턴(Design Pattern)
74. 디자인 패턴의 종류를 기술하고 각 패턴별 간단한 설명과 활용 예
75. Prototype 패턴(Pattern)
76. Singleton Pattern
77. 객체 지향 개념에서 추상화(Abstract)에 대해 정의하고 추상 클래스(Class)로 Code를 구현한 후 설명하시오.
78. Abstract Factory Pattern에 대해 설명하고 아래 Code를 Class Diagram으로 표현한 후 Abstract Factory Pattern을 적용하여 Coding하시오(Starcraft에 나오는 Teran Unit임).
79. Iterator Pattern에 대해 설명하고 Java 언어에 적용된 예제를 기술하시오.
80. Iterator Pattern을 사용하여 Factory Method Pattern을 구현하시오.
81. 아래 Class Diagram에서 TextView Class를 Adapter Pattern을 적용하여 구현하시오.

## PART 6. 객체 지향 언어
82. 객체 지향 개념과 구성요소, 객체(Object), 클래스(Class), 기능(Method, Message), 속성(Attribute)에 대해 설명하고 JAVA 언어로 실제 Code 예를 보이시오.
83. 객체 지향 개념에서 상속(Inheritance)에 대해 정의하고 상속 방법과 실제 Code 구현
84. 객체 지향 개념에서 추상화(Abstract)에 대해 정의하고 예를 들어 설명하시오.
85. 객체 지향 방법론에서 캡슐화(Encapsulation)와 정보은닉(Information Hiding)
86. JAVA 언어
87. JAVA의 주요 구현 분야와 개발 환경
88. JAVA 언어의 특징과 JAVA Program 실행 순서
89. JVM(Java Virtual Machine) 구조 설명
90. API(Application Program Interface)와 JAPI(Java API)
91. 객체 지향 설계원칙에 대해 실생활과 연계하여 설명하시오.
92. 객체 지향 언어의 특징과 설계원칙을 기술하고, 구조적 기법과 차별화되는 개념을 설명하시오. 또한 Private, Public 접근제어자(Access Modifier)를 사용하여 외부로부터 데이터를 보호하기 위한 정보 은닉 방법을 실제 객체 지향 언어(JAVA)로 간단히 구현하시오.
93. 객체 지향 언어의 특징(Code 예를 제시하시오.)
94. 객체 지향 언어의 오버라이딩(Overriding)과 오버로딩(Overloading)
95. 아래 파일 I/O 계층 구조에서 각 계층에서 추상화하는 부분에 대해 설명하시오.
96. Static Linking과 Dynamic Linking
97. AOP(Aspect Oriented Programming) 방법
98. 페어 프로그래밍(Pair Programming) 기법과 핑퐁 프로그래밍(Ping Pong Programming) 기법

## PART 7. 아키텍처(Architecture) 스타일
99. IEEE 1471(SW 아키텍처 명세에 관한 국제 표준)
100. MVC(Model, View, Controller)
101. Repository(저장소)
102. 계층형(Layered)
103. 파이프 필터(Pipe Filter)
104. PHP(Personal Home Page, Hypertext Pre-processor)의 개요와 동작원리, 특징, 유사 Program인 ASP, JSP와 비교
105. P2P(Peer-to-Peer) 아키텍처 스타일의 개념을 Network 개념을 적용하여 Client-Server와의 차이점, 특징 및 요구사항에 대해 설명하시오.
106. P2P(Peer-to-Peer) System의 운영형태에 따라 Pure P2P, Super P2P, Hybrid P2P로 분류할 수 있다. 각각에 대해 설명하고 장단점을 기술하시오.
107. 아래와 같은 간단한 응용에 대한 SW 아키텍처를 작성하고자 한다. 다음 질문에 답하시오.
영문 문자열을 입력하여 각 문자별 대?소문자를 체크하여 대?소문자를 바꾸어 출력하는 프로그램이다.
※ 입력 : ToDayIsHoIiDay 출력 : tOdAYiShoLIdAY
(1) C&C(Component & Connector:프로세스 뷰)를 작성할 때 가장 적당한 아키텍처 스타일을 제시하고 필요한 컴포넌트 커넥터를 제시하시오.
(2) 위에서 제시한 아키텍처 스타일에 따라 아키텍처를 작성하시오.
(3) 위 응용에 대한 모듈(논리 View) 작성을 위한 컴포넌트를 제시하고 아키텍처를 작성하시오.
108. 소프트웨어 아키텍처 평가 기법 중 ATAM(Architecture Trade-off Analysis Method)

## PART 8. OSS(Open Source Software)와 License의 종류
109. OSS(Open Source Software)의 장단점
110. OSS 개발 Process와 특징
111. OSS(Open Source Software)에서 Hidden Patent
112. IP(Intellectual Property) Rights
113. Open API(Application Programming Interface)
114. Apache License 2.0
115. OSS License에서 LGPL 2.1
116. BSD(Berkley Software Distribution) License
117. Free Software와 Open Software에 대해 설명하고 Open Source Software의 지적 재산권과 License에 대해 설명하시오.
118. 기업에서 오픈 소스 소프트웨어(OSS; Open Source Software)를 활용하여 비즈니스를 수행하고자 한다. 다음에 대해 설명하시오.
가. Open Source 정의와 GPL2.0의 내용을 기술하시오.
나. GPL 2.0의 의무사항과 GPL 3.0에서 추가된 내용을 설명하시오.

## PART 9. Project 관리
119. PMBOK의 5단계 Project 관리 Process
120. PMBOK에서 제시하는 10개 관리 활동 영역
121. Project와 Program, Portfolio
122. Project 생명주기에 따른 Project 관리 업무의 제약 사항
123. PM(Project Manager)이 Project를 관리하는 Process
124. Project의 특징과 PM과 PMO 역할을 비교
125. PMO(Project Management Office)의 기능에 대해 5개 이상 설명하시오.
126. PMO의 Framework
127. PMO의 주요 Model과 R&R(Role & Responsibility)에 따른 유형 비교
128. PMO(Project Management Office)의 기능 중 범위관리, 일정관리, 인적자원관리, 위험관리, 의사소통관리 기능에 대하여 각 기능의 정의, 주요 단계, 관리상의 주의사항
129. 정보시스템 감리와 PMO(Project Management office) 비교
130. 종료단계 감리 시 감리원은 구현기능을 직접 테스트하여 과업이행 여부를 판정하도록 정보시스템감리 수행가이드에 안내되어 있다.
가. 감리원이 직접 테스트하는 것이 현실적으로 어려운 사례를 설명
나. 검토 및 확인, 제3자 검증 점검방법을 통한 개선방안을 설명
131. Project 진행 시 발생될 수 있는 이해 관계자 간의 갈등 해결 방안
132. IEEE-SRS 830(Software 요구사항 명세서)
133. 요구사항을 만족하기 위해서는 요구공학적 개념이 필요하다. 요구공학을 위한 Process와 이를 개발하기 위한 절차
134. Software 요구사항 분석이 어려운 이유
135. IT 프로젝트를 성공적으로 수행하기 위해 요구사항의 체계적인 관리와 문서화가 매우 중요하다. 요구사항에 대하여 다음을 설명하시오.
1) 소프트웨어(SW) 요구사항 품질속성
2) 요구사항 도출 기법
3) 요구사항 개발 프로세스
136. 동기부여 이론(Motivation Theory)
137. 디자인 씽킹(Design Thinking)
138. Project 10관리 영역 중 (PMBOK 기준) 위험 관리 방안
139. Project 관리 영역 중 범위관리를 위한 Process
140. Project 일정 단축 기법 중 Fast Tracking과 Crashing 기법
141. Project 진행 과정에서 이해관계자 관리 방안(이해관계자 분석 Model)
142. 지연되는 Project에 인력을 더 충원해도 오히려 일정이 지연된다는 Brook’s Law
143. WBS(Work Breakdown Structure)
144. 정보화사업에서 작업분류체계(WBS; Work Breakdown Structure)를 이용하여 범위 및 일정 등을 관리한다. WBS 작성 원칙, 장점, 일정 지연 시 만회 대책 및 사례에 대해 설명하시오.
145. WBS(Work Breakdown Structure)의 특징, 유형, Activity의 선행 후행 의존 관계 설정 방법
146. Project 일정관리에서 임계경로(Critical Path)의 의미를 설명하고 다음의 CPM(Critical Path Method) Network에서 임계 경로를 찾으시오(방법 1).
147. Project 일정관리에서 임계경로(Critical Path)의 의미를 설명하고 다음의 CPM(Critical Path Method) Network에서 임계 경로를 찾으시오(방법 2).
148. Software의 분리 발주와 분할 발주

## PART 10. Process와 Product 검증에 대한 국제표준
149. Software 생명 주기 모형, SW 개발 방법론과 SW Process 평가 및 개선 모델 간의 관계
150. Software 품질 향상을 위한 국제 표준의 상호 관계도
151. Software의 개발과 양산, 그리고 유지 보수 과정에서 사용되는 품질 향상을 위한 국제 표준에 대해 설명하시오.
152. ISO/IEC 14598-1에 정의한 Software 제품 평가(Software Product Evaluation)
153. ISO/IEC 9126 품질 모델(Quality Model)
154. ISO 21500
155. ISO 12207의 구성과 구성에 따른 세부 내용
156. Software Product 평가를 위한 ISO/IEC 12119
157. ISO/IEC 25000
158. ISO 26262(Functional Safety)
159. e-SCM(e-Sourcing Capability Model) 품질 모델
160. ISO 20000에 대해서 기술하고, eSCM과 비교
161. ISO/IEC 15504(SPICE)
162. CMM(Capability Maturity Model) 성숙도 단계 및 평가 기준
163. GS(Good Software) 인증

## PART 11. 품질관리
164. Software의 품질관리(Quality Management)
165. Software 품질 향상을 위한 Test의 일반적인 원리와 유형, S/W Test의 문제점과 해결 방안
166. Software Test의 전략과 어려움
167. Software의 Test Case
168. Software 검증에서 Verification과 Validation 방법과 절차, 그리고 비교
169. Refactoring(리펙토링) (실제 사례도 포함하시오.)
170. 아래 논리회로를 부울(Boolean)대수 법칙을 적용하여 간소화(팩터링-Factoring)
171. Software 품질 개선을 위한 Inspection
172. 품질보증방안, review
173. Software 관리를 위한 형상통제위원회 활동
174. Software Test 방법 중 명세 기반과 구조 기반 Test 설계 기법
175. Daily Build
176. Test Oracle
177. Risk 기반 Test
178. 회귀테스트(Regression Test)
179. 통합테스트(Integration Test)에 대하여 다음을 설명하시오.
가. 비 점진적통합 방식과 점진적 통합 방식
나. 하향식(Top Down) 통합 테스트와 상향식(Bottom Up) 통합 테스트
다. 테스트 드라이버(Test Driver)와 테스트 스텁(Test Stub)
180. 화이트박스 테스트(White Box Test)와 블랙박스 테스트(Black Box Test)의 비교
181. 몽키 테스트(Monkey Test)와 회귀 테스트(Regression Test) 비교 설명
182. 카오스 테스트(Chaos Test)
183. Embedded Software Test
184. Software 개발 프로젝트 품질비용 항목 4가지를 제시하고 사례를 들어 설명하시오.
185. Back To Back Test
186. Pairwise Test
187. 이벤트(Event) 기반의 시스템 Testing을 위한 Record and Replay
188. Software 검증을 위한 테스트 자동화(Test Automation)
189. System의 오류(Error), 결함(Fault), 고장(Failure)을 방지하기 위한 일반적인 Test 과정
190. 아래 코드에 대한 테스트 케이스(test case)를 작성하는 과정
191. 시스템의 테스트 완전성을 확보하기 위한 소스코드 커버리지(source code coverage)의 종류
192. SP(Software Process) 인증
193. PSP(Personal Software Process)
194. TSP(Team Software Process)
195. 소프트웨어 안전성 분석의 필요성과 FTA(Fault Tree Analysis)
196. 소프트웨어 안전성 분석의 필요성과 HAZOP(Hazard and Operability Analysis)

## PART 12. 기성고 관리(프로젝트 수행 시 중간 점검) 및 S/W 원가 산정
197. Project 기성고 관리(EVM; Earned Value Management) 기법
198. Project 일정 계획에 대해 다음 물음에 대해 설명하시오.
1) EVM(Earned Value Management)에 대해 설명하시오.
2) 1월 1일부터 6월 1일까지 진행되는 Project에 관한 진행 기록이 다음과 같을 때 EV(Earned Value), SPI(Schedule Performance Index), SV(Schedule Variance), CPI(Cost Performance Index), 그리고 CV(Cost Variance)를 각각 구하시오. 단, 현재일은 3월 1일이라고 가정한다.
199. 사업예산은 1,600,000천원, 사업기간은 16개월인 프로젝트가 4개월 경과되어 Project 관리는 수행업체에게 400,000천원을 지급하였다. 그러나 확인 결과 작업 수행률은 20%이었다. 이 문제에 대한 기성고 분석(EVA; Earned Value Analysis)을 수행하였다.
가. 프로젝트 비용의 계획대비 실적의 차이(CV), 실제 예상 원가 효율(CPI)을 각각 구하고 값의 의미를 설명하시오.
나. Project 일정 진척사항 파악(SV), 일정에 대한 효율(SPI)을 각각 구하고 값의 의미를 설명하시오.
다. 완료시점 원가 예상치(EAC)를 구해 보고, Project 관리자 입장에서 신뢰성 있는 원가 또는 일정 준수를 위해 현장에서 실현 가능한 고려사항을 제시하시오.
200. 새로운 IT 프로젝트를 수행 중에 있다. 각 단계의 일정은 한 달씩 걸리고, 각 단계마다 10,000천원의 예산이 할당되었다. 각 단계는 해당 단계가 끝난 후에 다음 단계를 수행하도록 되어 있다. 오늘은 3월의 마지막 날이다. 아래 프로젝트 진척 상황표를 이용하여 Earned Value Analysis 측면에서 다음 질문에 대하여 설명하시오.
가. PV(Planned Value), EV(Earned Value), AC(Actual Cost), BAC(Budget At Completion), CV(Cost Variance), CPI(Cost Performance Index), SVS(Schedule Variance), SPI(Schedule Performance Index)의 계산식과 답을 구하시오.
나. EAC(Estimate At Completion), ETC(Estimate To Complete), VAC(Variance At Completion)의 계산식과 답을 구하시오(단, EAC는 향후에도 CPI의 비율로 지출됨).
다. 상기 결과를 바탕으로 현재 진행 중인 IT 프로젝트의 상태를 진단하시오.
201. 소프트웨어(Software) 규모 산정
가. 필요성과 산정 방식
나. 규모 산정 방식의 종류별 특징
202. 소프트웨어(Software) 원가 산정 방법
203. Software사업 영향평가
204. 최근 대규모 공공 차세대 시스템이 오픈 이후에 많은 문제점이 발생되어 사회적 불편을 초래하게 되었다. 이에 대하여 다음을 설명하시오.
가. 발생된 문제점의 원인
나. 재발 방지를 위한 대책 및 법제도 보완 방안
다. 시스템 오픈 가능 여부 판단을 위한 지표관리

# 6 알고리즘
- 2019년 01월 07일
- https://www.yes24.com/product/goods/66805369

## PART 1. 자료구조(Data Structure)와 알고리즘(Algorithm)
1. 자료구조(Data Structure)
2. 자료구조(Data Structure)의 형태, 구성, 단위
3. 알고리즘(Algorithm)의 정의, 조건, 접근 방법, 분석 방법
4. 알고리즘 실행시간을 추정하는데 사용되는 Big-Oh(O) 표기법
5. 알고리즘의 평가방법인 Time Complexity(시간 복잡도)와 Space Complexity(공간 복잡도)
6. 10진수 53를 2진수로 변환하고 2진수 110101을 10진수로 변환
7. 10진수 0.6875를 2진수로 변환하고 그 결과를 다시 10진수로 표현
8. 2진수를 음수로 표현하는 방법 3가지 이상 나열
9. 알고리즘 표현 방법과 반복문인 for, while, do~while문을 사용하여 1에서 100까지 덧셈하는 code 예제와 순서도
10. 아래 3개 A,B,C 알고리즘 사용시 n에 대한 전체 연산수를 구하시오
11. 프로그램 언어에서 함수간 매개변수 전달기법인 Call-by-value, Call-by-reference, Call-by-name에 대해 실제 Code 예제를 보이시오.
12. C언어를 사용하여 정수를 이진수로 변환하는 프로그램을 작성하시오.
가정: C언어에서 이진수의 출력은 문자열, 이진수는 32bit를 초과하지 않음
13. 자료 구조에서 아래 Pointer 자료의 Memory Allocation (할당)를 표현하고 설명하시오.

## PART 2. 재귀함수(Recursion Function)
14. “Factorial n”을 구하는 재귀호출 알고리즘
15. 다음 재귀호출(Recursive Call) Code에 수행 동작을 설명하시오.
16. 피보나치 수열(Fibonacci Sequence)에 대해 설명하고 아래 Code에 대한 실행 결과를 기술하시오.
17. 아래 피보나치(Fibonacci) 함수 Code에 대해 실행 과정을 설명하고 실행 결과를 기술하시오.
18. 아래 하노이 타워(The Tower of Hanoi) 문제를 아래 조건에 적절하게 기술하시오.
조건 1) 하나의 막대에 쌓여 있는 원반을 다른 하나의 원반에 그대로 옮기시오.
이때 한 번에 하나씩만 옮길 수 있고 옮기는 과정에서 작은 원반의 위에
큰 원반이 올려져서는 안됨.
조건 2) 실행 과정을 설명하고 Coding 하시오.

## PART 3. 배열(Array)과 연결 리스트(Linked List)
19. Array(배열)에 대해 설명하고 장단점
20. 다음 3차원 배열 값에 대한 배열의 각각의 요소 값과 Memory에 할당되는 방법에 대해 기술하시오(행(Column)우선의 경우를 고려하여 작성하시오).
21. 배열(Array) List와 연결 List의 차이점
22. 선형 List(Linear List)에서 처리할 수 있는 연산에 대해 7가지 이상 나열
23. Linked List의 구성과 비순차적인 메모리 구성에 따른 삽입과 삭제
24. 다음과 같이 구조체 자료형 인 _node를 선언하고 이를 이용하여 연결리스트(Linked List)를 만들었다. 다음 소스를 보고 물음에 답하시오(단, 시작함수는 _tmain()).
25. 이중(Double) 연결 리스트(Linked List)에서 삽입과 삭제
26. 인접 다중 리스트(Adjacency Multi List)에 대해 설명하고 아래 Graph 에 대해 인접 리스트로 표현하시오.

## PART 4. 스택(Stack)과 큐(Queue)
27. 스택(Stack)에서 사용되는 용어와 연산
28. 아래 Stack 구조를 Linked List(연결리스트)형태로 표현하고 D값을 삭제한 연결리스트와 E값을 삽입한 연결리스트를 도식화 하시오(Stack크기는 5로 가정한다).
29. Stack의 크기 n=5인 스택에서 노드 A,B,C,D를 Push하고 D,C,B를 POP한 후 다시 노드 E,F를 Push 하는 과정(TOP는 Stack Pointer임)
30. Stack의 활용예 5가지 이상과 2개의 상세예제 그리고 stack overflow 발생방지방법 2가지
31. Queue에 대해 설명하고 Queue를 표현하기 위한 조건과 큐의 삽입과 삭제에 대해 Coding하여 설명하시오.
32. 원형 큐(Circular Queue)에서 Enqueue와 Dequeue, Empty와 Full 상태
33. 우선순위 큐(Priority Queue)를 구현하는 방법으로 배열, 연결 List, 힙(Heap)을 이용하는 방법이 있다. 각각 설명하시오.
34. 데크(Deque : Double Ended Queue)의 삽입과 삭제 과정

## PART 5. 정렬(Sorting)
35. 다음은 C언어로 작성된 버블 정렬(Bubble Sort) 알고리즘 프로그램 일부이다. 프로그램을 완성하시오.
36. 아래 Code는 Bubble Sort에서 Flag를 사용하는 경우와 사용하지 않는 경우를 각각 Coding 하고자 한다. 가.항목과 나.항목의 Code를 완성하고 차이점을 기술하시오.
37. Bubble Sort에서 이미 정렬된 값은 더 이상 비교할 필요가 없다. 이 점을 고려하여 Bubble Sort의 예제를 들어 Coding 하시오(설명도 추가하시오).
38. 다음 Key값에 대한 Bubble Sort 과정을 설명하고 버블 정렬 성능 평가를 Big-oh(O)로 표기하시오.
39. 아래 Key값에 대해 선택 정렬 (Selection Sort) 과정을 설명하고 Coding 예제를 기술하시오.
40. 아래 Key값에 대해 삽입 정렬 (Insertion Sort) 과정을 설명하고 Code 예제를 기술하시오.
41. Insertion Sort (삽입 정렬)에 대해 실행 효율적인 측면을 설명하고 초기 자료 : 2, 4, 3, 5, 1 값에 실행 과정을 기술하시오.
42. 다음 값을 삽입 정렬 (Insert Sorting) 과정을 설명하시오.
43. 다음 각각의 Data를 선택 정렬과 머지 정렬(Merge)의 과정을 설명하시오.
44. 아래 Record 값을 버킷(Bucket)을 사용하여 기수정렬(Radix Sort)을 수행하는 과정을 기술하시오(n=15).
45. 아래 Record 값을 Queue를 사용하여 기수정렬(Radix Sort)을 수행하는 과정을 기술하시오.(n=15)
46. 12개의 Record Key 값= (121, 212, 004, 120, 215, 309, 518, 202, 415, 345, 107, 333)로 구성된 파일을 기수정렬(Radix) (LSD 우선방식적용)로 정렬하는 과정을 보이시오.
47. 아래 2개의 배열 값에서 2-원 합병 정렬 (2-Way Merge Sort)으로 정렬하는 과정을 설명하시오.
48. 아래 Key 값을 이용하여 Shell Sort 과정을 설명하시오(이때 매개변수는 6,4,3,2,1을 적용하시오).
49. 병합 정렬 (Merge Sort)의 방법에 대해 추상화하여 설명하시오. Key값은 다음과 같다. Key=(8, 2, 3, 7, 1, 5, 4, 6)
50. 다음 16개의 정렬되지 않는 초기 자료가 배열 a 에 입력되어 있을 때 단계별로 오름차순으로 정렬되는 과정을 (기수정렬-Radix Sort)방법 사용) 기술하시오.
51. Quick Sorting 알고리즘을 설명하고, 다음 Data를 Quick Sorting 알고리즘을 정렬하는 과정을 설명하시오. Data는 15, 22, 13, 27, 12, 10, 20, 25.
52. 아래 정렬되지 않은 데이터가 9개 있을 때 외부정렬(External Sort) 방식인 다단계 병합방식으로 정렬되는 과정을 기술하시오.
53. 아래 정렬되지 않은 데이터 8개에 대해 균형병합정렬(Balanced Merge Sort)과정을 기술하시오.
54. 아래 이진트리를 힙(Heap)구조로 변형하시오.
55. 아래 이진트리는 이미 Heap 구조로 변형된 상태(초기상태)이다. Heap sort의 과정을 상세히 설명하시오.
56. 다음 Heap 구조에서 3를 추가하여 Heap 구조를 재정렬하고 Root Node 제거시의 과정을 기술하시오(최소 힙 - Minimum Heap을 사용하시오).
57 내부 정렬(Sort)알고리즘의 종류를 나열하고 비교횟수와 소요공간(기억공간), 특징을 나열하시오.

## PART 6. 탐색(Search)
58. 검색(Search)의 정의와 용어, 그리고 검색 방법을 분류
59. 순차 검색(Sequential Search)의 정의와 알고리즘 표현 그리고 Average Search Length(평균검색 길이)를 설명하시오.
60. 이진 검색(Binary Search)과정을 Flow Chart로 표현하시오.
61. Binary Search(이진검색)에 대해 설명하고 아래 Record에서 ‘25’ Key 값을 검색하는 과정을 설명하시오.
62. 다음은 17개의 Record로 구성된 파일이다. 키 M을 트리 형태로 표현하고 검색하는 과정을 기술하시오.
63. 다음은 17개의 Record로 구성된 파일이다. Key M을 이진 검색(Binary Search)방법으로 찾으시오.
64. 다음 Record에서 Key 값 57을 찾는 과정을 이진탐색(Binary Search)법으로 설명하시오(알고리즘도 작성하시오).
65. 보간 검색(Interpolation Search)에 대해 설명하고 아래 Record에서 보간 검색법을 이용하여 Key값 55를 검색하는 과정을 설명하시오.
66. 블록 검색(Block Search)에 대해 설명하고 다음 16개 Record로 구성된 파일을 블록으로 저장한 형태이다. Key 64를 검색하는 과정을 설명하시오(블록당 Record는 4개).
67. 다음 12개의 Record를 가진 파일에서 Key 28을 가진 Record를 피보나치 검색(Fibonacci Search)과정을 기술하시오.
68. 이진 검색 트리(Binary Search Tree)의 각 Node의 Key값 특징을 설명하고 아래 이진 검색 트리 구성에서 ⑪ Key값을 검색하는 과정에 대해 Flow Chart 형태로 기술하시오.
69. TLB, SNS, RTE, SAN, FIFO, ROI, HASH의 데이터에서 해싱(Hashing)을 이용하여 ROI와 ERP를 검색하라(아래 EBCDIC Code의 Table을 활용하여 Hashing 함수를 구하고 버킷수는 10개이고 한 개의 버킷에는 2개의 Data를 저장할 수 있음).
70. Hashing(해싱) 충돌과 해결방법에 대해 설명하시오.
71. 검색알고리즘(Search Algorithm)의 평균 검색길이, 검색수행시간, 기억공간, 특징을 5가지 이상 나열하고 비교하시오.

## PART 7. 산술식 표현과 트리(Tree)
72. 다음 산술식 X= A+(B+C/D)*E-F를 이진 트리 형태로 표현하고 전위(Prefix)표기법과 후위 (Postfix)표기법에 따라 stack에 저장되는 형태를 기술하시오(우선순위는 ( ), *, /, +, - 순).
73. 다음 산술식을 우선순위 연산자를 고려하여 계산하시오(A는 3, B=4, C=5, D=2, E=3, F=2, G는 6이다).
74. 산술식 X= A+(B+C/D)*E-F를 후위 (Postfix)로 표기하고 이때 후위 표기 산술식의 Stack 연산 과정을 기술하시오(우선순위는 (), *, /, +, - 순임).
75. 다음 수식을 Tree 형태 (수식 트리=Expression Tree)로 표현하여 계산하시오.(우선순위는 *,+,-순)
76. Tree에서 사용되는 용어 10개 이상에 대해 설명하시오.
77. 이진트리(Binary Tree)의 유형에 대해 설명하고 이진트리의 순회(Traversal) 방법 4가지의 예를 드시오.
78. 아래 이진트리의 운행(Traversal) 방법 4가지를 적용하여 결과를 기술하시오.
79. 다음 이진 트리에서 전위순회(Preorder Traversal) 실행 과정을 상세히 기술하시오.
80. 스레드 이진 트리 (Thread Binary Tree)의 표현 방식을 설명하고 아래 이진트리를 전위, 중위, 후위 운행법에 의해 각각 표기하시오.
81. 다음 이진(Binary) Tree를 Thread Binary Tree의 전위 운행(Pre-order Traversal)시의 메모리에 실제 저장되는 값으로 표현하시오.
82. 다음 이진(Binary) Tree를 Thread Binary Tree의 중위 운행(In-Order Traversal)시의 메모리에 실제 저장되는 값으로 표현하시오.
83. 다음 이진(Binary) Tree를 Thread Binary Tree의 후위 운행(Post-Order Traversal)시의 메모리에 실제 저장되는 값으로 표현하시오.
84. Thread Binary Tree(쓰레드 이진트리)를 정의하고 노드구조와 아래 제시된 쓰레드 이진트리가 메모리(Memory) 내에 어떻게 표현되는지 기술하시오(중위 운행시).
85. 다음의 Node 구조를 이용하여 아래 이진트리(Binary Tree)를 Linked List 방법으로 표현하고 기억 장소에 저장되는 트리 상태를 표현하시오(기억 장소 번지는 0번지부터 시작).
86. Thread Binary Tree에 대해 설명하고 아래 이진 트리를 Thread Binary Tree로 표현하시오.
87. 이진 탐색 트리(Binary search Tree)의 Data 삽입과 삭제과정에 대해 설명하시오.
88. AVL Tree를 설명하고 AVL 트리(Tree)의 불균형을 초래하는 4가지 Type( LL, LR, RL, RR)에 대해 예를 들어 나열하고 Node 값이 30, 20, 10, 50, 40순으로 입력될 때 AVL Tree에 삽입되는 과정을 기술하시오.
89. AVL Tree에서 LR Type의 Rotation 방법과 RL Type의 Rotation 방법에 대해 설명하고 Pseudo-Code(의사코드)로 표현하시오.
90. 아래 이진트리에서 Node 값을 45, 5, 2, 10, 7, 11, 8, 14 순으로 AVL Tree에 삽입하는 과정을 기술하시오.
91. Key 값(8, 9, 10, 2, 1, 5, 3, 6, 4, 7, 11, 12)을 순서대로 삽입하면서 AVL Tree를 구축하시오.
92. 다음 이진트리에서 각각의 Key (20과 5)를 삭제 시 AVL Tree로 재구성하시오.
93. 다음 이진트리에서 Key 값 5를 삭제 시 AVL Tree로 재구성하시오.
94. 2-3 Tree에 대해 설명하고 아래 2-3 Tree에서 39, 38, 37 Key 값을 삽입하는 과정을 기술하시오.
95. 2-3 Tree에 Key 36값을 삽입하는 과정을 기술하시오.
96. 2-3 Tree의 경우 Root Node까지 경로가 꽉 찬 경우 Root 위쪽으로 높이가 1 증가된다. 아래 2-3 Tree에서 Root 위쪽으로 1만큼 증가되는 과정을 기술하시오(32 Key 삽입 과정시 1 증가됨, Key 32를 삽입하시오).
97. 다음 2-3 Tree에서 Key 값 10, 5, 20이 삭제되는 과정을 기술하시오.
98. 다음 2-3 Tree에서 Key 값 40이 삭제되는 과정을 기술하시오.
99. 2-3-4 Tree에 대해 설명하고 아래 2-3-4 Tree에서 Key 21를 삽입할 때 2-3-4 Tree의 재구성 방법에 대해 기술하시오.
100. 다음 2-3-4 Tree Key 값 50, 65, 60, 90, 40 순으로 삭제될 때 2-3-4 Tree의 재구성 방법에 대해 설명하시오(2-3 Tree와 2-3-4 Tree를 비교 설명하시오).
101. 2-3-4 Tree Key 삽입 시 4 -Node 제거(분리) 방법에 대해 설명하시오.
102. Red Black Tree에 대해 설명하고 사용 이유, Node의 구조, 2-3-4 Tree를 Red Block Tree로 표현 방법과 Key 값 10,20,30,40,50,60 삽입과정을 2-3-4 Tree 형태와 비교하여 설명하시오.
103. m-원 탐색 Tree의 특성을 설명하시오.
104. B-Tree에 대해 설명하고 주어진 B-Tree에서 Key 값 22, 41, 59, 57를 삽입하는 과정을 설명하시오.
105. B* - Tree에 대해 설명하고 Key 값 분리되는 과정을 설명하시오.
1) 차수가 5인 B*-Tree
2) 차수가 5인 B*-Tree
106. B+ - Tree에 대해 설명하시오.
107. 다음 B-Tree에서 Key 값 58, 7, 60, 20, 15 순으로 삭제 시 Flow와 실제 동작에 대해 상세히 기술하시오.
108. 다음 B-Tree에서 Key값 22, 41, 59, 57, 54를 삽입하는 Flow와 실제 동작에 대해 상세히 기술하시오.
109. 아래 차수가 5인 B*-Tree에서 재분배 키 값 24의 삽입 과정을 보이시오.
110. B+-Tree에서 키 값 15, 69, 110, 90, 20, 120, 40, 125순으로 삽입 시 삽입과정을 기술하시오.
111. T-Tree의 Search 과정에 대해 설명하시오.
112. B-tree, B+-tree, B*-tree, T-tree의 개념을 설명하고 비교하시오.

## PART 8. 그래프(Graph)
113. Graph의 용어에 대해 7가지 이상 설명하시오.
114. Graph는 정점과 연결선의 집합으로 표시된다. G=(V,E). 즉 유관한 사물(Object) 또는 개념(Concept)끼리 서로 연결한 것이 그래프이다. 일상 생활속에서 Graph로 나열이 가능한 항목들을 정점과 간선(연결선)으로 구분해 보시오.
115. Graph의 정의를 설명하고 Graph의 종류에 대해 10개 이상 도식하여 간략히 기술하시오.
116. 다음 비 방향성 그래프와 방향성 Graph에서 인접행렬과 인접 리스트로 표현하시오.
117. 아래 방향 그래프에 대해 아래 질문에 대해 기술하시오.
　　1) 각 정점에 대하여 진입차수와 진출차수를 구하시오.
　　2) 인접 행렬을 표현하시오.
　　3) 인접 리스트를 표현하시오.
118. 아래 그래프(Graph)에서 깊이 우선 검색(DFS: Depth - First Search)으로 운행(Traversal)시 방문 순서와 stack의 동작과정을 기술하시오.
119. 아래 그래프(Graph)에서 넓이 우선 검색(BFS: Breadth - First Search) 으로 운행 (Traversal)시 방문 순서와 Queue의 동작 과정을 기술하시오(비방향성 Graph).
120. 다음 그래프(Graph)를 이용하여 최적 경로를 찾는데 이용되는 최소 신장 트리(Minimal Spanning Tree)알고리즘에 대하여 설명하시오.
121. 다음과 같이 7개 신도시의 도로 공사를 최소의 비용으로 설계할 때, 다음 물음에 답하시오. 단, 노드는 도시 이름을 나타내고 간선은 공사 비용이다.
1) MST(Minimal Spanning Tree)의 개념에 대해 설명하시오.
2) 위 그래프의 비용 인접 리스트를 도식화하시오.
3) Prim’s 알고리즘을 이용해서 MST 를 구하는 절차를 보이시오, 단 시작노드는 A이다.
4) Kruskal’s 알고리즘을 이용해서 MST를 구하는 절차를 보이시오.
122. 다음 Graph 에서 Sollin 알고리즘을 적용하여 최소 비용 신장 트리(Minimum Cost Spanning Tree)를 작성하시오.
123. 다음 Graph에서 최소 비용 신장 트리로 표시하시오.
1) Kruskal’s Algorithm 적용
2) Prim’s Algorithm 적용
3) Sollin’s Algorithm 적용
위의 각 알고리즘 적용시 수행 과정 및 결과를 보이시오.
124. 다음 Graph에서 Kruskal 알고리즘을 적용하여 최소 비용 신장 트리를 작성하시오(오름차순을 적용하시오).
125. 다음 Graph에서 Prim알고리즘을 적용하여 최소 비용 신장트리(Minimum-Cost Spanning Tree)를 작성하시오.
126. 다음 Graph에서 Kruskal 알고리즘을 적용하여 최소 비용 신장 트리를 작성하시오(내림차순을 적용하시오).

## PART 9. 기타 알고리즘
127. 압축기술에 대해 설명하시오.
128. MPEG 7 에 대해 설명하시오.
129. Data 압축(Compression)의 장단점에 대해 설명하시오.
130. 주어진 ASCII Code 범위 내에서 하나의 문자를 입력 받아 숫자, 대문자, 소문자를 구별하는 순서도(Flow Chart)와 Pseudo Code를 작성하시오.
131. 1~100까지 홀수와 짝수 합을 각각 구하여 출력하는 순서도(Flow Chart)와 Pseudo Code를 작성하시오.
132. Process들이나 Thread들의 상호배제 구현을 위한 Dekker 알고리즘을 추상화하여 설명하고 Pseudo-Code 로 설명하시오.
133. Process들이나 Thread들의 상호배제 구현을 위한 Peterson 알고리즘을 추상화하여 설명하고 Pseudo-Code 로 설명하시오.
134. 프로그램 병행성에 대해 설명하고 아래와 같이 두 개의 프로세스(Process) p1과 p2가 병행 실행되는 경우 모든 가능한 인터리빙(Interleaving)을 보이시오.
135. DMA(Direct Memory Access)동작을 Flow chart 형태로 작성하시오.
136. 반가산기 회로를 Verilog HDL(Hardware Description Language)으로 모델링(Modeling)하시오.
137. (1) Two Phase Locking에 대해 설명하고 이 Protocol의 장점과 단점에 대해 설명하시오.
　　(2) 다음 각 트랜잭션에 대해 Two phase Locking을 적용한 결과를 보이시오.
138. UNIX 시스템 호출을 이용한 다음 프로그램을 보고 질문에 답하시오(수행권한은 Root임).
139. 다음 Schedule은 직렬 불가능(Non-serialization)하다. 원하는 값과 실제 수행 값을 표기하고, 문제점과 직렬화 하기 위한 방안은 무엇인지 설명하시오(R은 Read, W는 Write를 의미) (A=100, B=100).
140. 아래 주어진 프로그램이 수행하는 기능에 대해 설명하고 동작 Flowchart화 하시오. 버퍼크기(Buffer Size)가 성능(Performance)에 미치는 영향에 대해 설명하시오.
141. 기계 학습(Machine Learning)알고리즘의 종류에 대해 설명하시오.
142. 인공지능 분야에 활용되는 에이전트(Agent)에 대해 설명하시오.
143. 에이전트(Agent) 기술

## PART 10. 부록. 알고리즘 Source Code
※ Visual Studio 환경에서 정상적으로 실행된 Source Code입니다.
PART 1. 1) Binary 변환, 2) Callbyname, 3) Callbyreference, 4) Callbyvalue
PART 2. 5) FactorialN, 6) FibonacciCode, 7) FibonacciSequence, 8) TheTowerOfHanoi
PART 3. 9) LinkedListOrderedInsertDelete, 10) LinkedListOrderedInsertDeletePrint
PART 4. 11) QueueInsertDelete, 12) stackPushPop
PART 5. 13) Bubble_Flag, 14) Bubble_noFlag, 15) BubbleSort, 16) InsertSort, 17) QuickSort, 18) SelectionSort
PART 6. 19) BinarySearch, 20) InterpolationSearch, 21) SequentialSearch
PART 7. 22) Tree 순회(Traversal)

# 7 IT 경영
- 2019년 07월 22일
- https://www.yes24.com/product/goods/76897438

## Part 1 정보 기술(IT; Information Technology)
1. 자료(Data)와 정보(Information), 지식(Knowledge)의 관계, 정보(Information)의 특성
2. 시스템(System) 정의, 특성, 유형
3. 정보 시스템(Information System)의 구성 요소
4. 정보 기술(IT) 발전에 따른 과거와 현재의 차이점
5. 정보 기술(IT, Information Technology)의 주요 변화
6. IT 경영의 필요성과 IT 경영에 필요한 System, 정보 시스템의 물리적 구성 요소
7. 경영 혁신(Management Innovation) 기법
- 리엔지니어링(Reengineering)
- 리스트럭처링(Restructuring)
- 다운 사이징(Down Sizing)
- 벤치마킹(Bench Marking)
- 학습 조직(Learning Organization)
- 전략적 제휴(Strategic Alliance)
- 고객 만족 경영(Customer Satisfaction Management)
- 스피드/타이밍 경영(Speed(Timing) Management)
- 시나리오 경영(Sinario Management)
- 가치기반 경영(Value Based Management)
8. MOT(Management Of Technology)

## Part 2 IT 경영 분석 및 전략
9. 경영 환경 분석 기법들
10. 3C 분석(Analysis)
11. 전략 수립 도구인 4C
12. SWOT 분석 기법과 절차
13. PDCA Cycle
14. Process 개선을 위한 IDEAL Cycle
15. BCG Matrix 특징, 각 유형에 따른 적용 가능한 전략을 수립의 사례
16. 컨설팅(Consulting)의 기본 원리인 MECE(Mutually Exclusive Collectively Exhaustive)와 LISS(Linearly Independent Spanning Set)
17. 기업 경영 전략 수립을 위한 5-Forces 분석과 7S 분석 기법
18. Benchmarking의 대상과 필요성, 절차
19. Pareto 법칙
20. 마케팅(Marketing) 전략인 STP 전략
21. 캐즘(Chasm) 이론
22. IT 투자 수익률(ROI) 분석
23. TCO(Total Cost of Ownership)

## Part 3 기업 경영 전략 수립 및 전사 통합 시스템
24. EA(Enterprise Architecture)의 구성과 구축 절차
25. EA(Enterprise Architecture)의 참조 모델(Reference Model)
26. ISP(Information Strategy Planning)
27. BPR(Business Process Reengineering)
28. BPR(Business Process Reengineering)-추진 절차
29. BPR(Business Process Reengineering)-2교시형
30. EAI(Enterprise Application Integration)
31. BI(Business Intelligence)의 주요 구성 요소와 BI 1.0, BI 2.0, BI 3.0 비교
32. BI 1.0과 BI 2.0, BI(Business Intelligence)수행 위한 요구 사항과 해결 방안
33. EIP(Enterprise Information Portal)
34. EKP(Ent erprise Knowledge Portal) (지식 경영의 변화에 대해서도 설명하시오)
35. IRM(Information Resource Management)
36. BPEL(Business Process Execution Language)
37. PI(Process Innovation)

## Part 4 정보 시스템 구축
38. ERP(Enterprise Resource Planning)의 구축 방법
39. 경영 환경의 Paradigm, ERP의 필요성 및 도입 효과
40. Global SCM(Supply Chain Management)
41. e-SCM(e-Sourcing Capability Model)
42. PLM(Product Lifecycle Management)(1교시형)
43. PLM(Product Lifecycle Management)(2교시형)
44. CRM(Customer Relationship Management)
45. PRM(Partner Relationship Management)
46. VRM(Vendor Relationship Management)
47. ITAM(IT Asset Management)
48. CIM(Computer Integrated Manufacturing)
49. MES(Manufacturing Execution System)
50. SAM(Software Asset Management)
51. ISO-19770
52. SRM(Storage Resource Management)
53. MRO(Maintenance, Repair, Operation)
54. ILM(Information Lifecycle Management)
55. BPM(Business Process Management)

## Part 5 IT 아웃소싱(Outsourcing) Process 및 IT 서비스 관리
56. ITO(IT Outsourcing)
57. BPO(Business Process Outsourcing)
58. ITO에서 RFI(Request For Information)와 RFP(Request For Proposal)의 목적과 작성 방법
59. SLA(Service Level Agreement)
60. SLA(Service Level Agreement)의 문제점과 해결 방안
61. SLA(Service Level Agreement) 계약 시 발주자와 수주자의 고려 사항
62. SOW(Statement Of Work)
63. SLM(Service Level Management)의 개념도와 구성 요소
64. ITSM(IT Service Management)
65. ITSM의 도입 목표 수립 방안과 구축 절차, 성공적인 도입을 위해 해야 할 Activity
66. ITIL(IT Infrastructure Library)
67. ITIL(IT Infrastructure Library) v3
68. ISO 20000
69. Escrow 서비스
70. Software Escrow

## Part 6 기업 연속성 관리
71. 정보 시스템의 위험 요소와 위험 분석 단계, 대응 방법
72. 정보 시스템의 위험 관리 방안과 정량적 위험 분석(Quantitative Risk Analysis) 방법
73. FT(Fault Tolerance)
74. FT(Fault Tolerance)와 HA(High Availability)
75. 디지털 컴퓨터의 내고장성(Fault Tolerance)을 위해 사용되는 Cold-Standby, Hot-Standby, 삼중 구조 (Triple Modular Redundancy :TMR) 시스템
76. 정보 System에서 발생할 수 있는 재난(Disaster)의 종류 및 전산 센터의 Backup 센터 구축 기법
77. 재해 복구 시스템(DRS: Disaster Recovery System)
78. 재해 복구 시스템 구축 방법에는 Mirror, Hot, Warm, Cold site 구축, Mirror Site 구축 방식에서 비동기(Asynchronous)방식과 동기(Synchronous) 방식
79. 정보 시스템 재해 복구의 수준별 유형을 분류하고 RTO(Recovery Time Object)와 RPO(Recovery Point Object) 관점에서 비교
80. 기업의 CIO(정보 담당이사 : Chief Information Officer)로서 업무 연속성 보장을 위한 BCP와 DR 체계를 수립하고 이에 대한 전략 제시
81. System에 대해 재해 복구 전략 수립 시 고려해야 할 RSO, RTO, RPO, RCO, BCO의 특성
82. BCP(Business Continuity Plan)와 DRS(Disaster Recovery System) 비교
83. BS25999
84. 최근 IDC가 그린(Green) IT, 친환경 및 에너지 절약형 IDC 구축 방안
85. 정보 시스템의 가용성(Availability) 확보 방안

## Part 7 IT 효율 지원 및 Business 전략
86. IT 거버넌스(Governance)
87. IT Compliance
88. 기업의 RTE(Real Time Enterprise)를 구현하기 위한 기술 요소
89. RTE(Real Time Enterprise) 추진 절차와 사례, 구축 시의 고려 사항
90. BAM(Business Activity Monitoring)
91. PPM(Project Portfolio Management)
92. SEM(Strategic Enterprise Management)개념, 구성 요소, 구축 절차, 기대 효과
93. BSC(Balanced Score Card)
94. IT-BSC에 대해 설명하고 BSC와 비교
95. CEP(Complex Event Processing)
96. 사이클론(Cyclone) Model, 현업에서의 경험 사례와 느낀 점
97. 차세대 IT 관리(Management) 방안

## Part 8 품질 경영
98. FMEA(Failure Mode & Effects Analysis)의 목적과 FMEA를 활용한 설계 품질 확보 체계
99. FMEA(Failure Mode & Effects Analysis)의 진행 절차와 목적에 따른 FMEA 종류
100. FMEA(Failure Mode & Effects Analysis) 활동을 통해 Product(제품)의 사전 신뢰성 확보 방안(유형별 추진 방법과 SW-FMEA도 기술하시오)
101. 통계(Statistics) 필요성, 과정
102. 통계(Statistics) Data의 종류
103. 모집단에서 표본(Sample)을 추출하는 방법과 종류
104. 통계 Data에서 평균(Mean), 중앙값(Median), 최빈값(Mode)을 구하시오.
105. 가설 검증(Hypothesis Testing)의 절차와 가설 검증의 두 가지 오류
106. 실험(Experiment) 설계를 위한 주 효과(Main Effect)와 교호작용(Interaction Effect)에 대해 설명하고 아래 결과값에 따른 교호작용과 주 효과를 계산하시오.
107. 두 개의 주사위를 던져서 숫자의 합이 7이 될 확률과 9과 될 확률
108. 확률 변수(Probability Variable)에 대해 정의하고 확률 분포(Distribution)의 종류
109. 측정 오차는 정확도(Accuracy)와 정밀도(Precision) 의 편차에서 발생된다고 볼 수 있다. 정확도와 정밀도에 대해 설명하고 정확도 변동의 원인으로는 편의(Bias), 안정성(Stability), 선형성(Linearity), 반복성(Repeatability), 재현성(Reproducibility)으로 분류될 수 있다. 각각에 대해 설명하시오.
110. 현장의 문제 해결 방법론인 QC(Quality Control) 7가지(Check Sheet, Pareto 그림, Histogram, 특성 요인도, 산점도, 층별, 관리도) 도구
111. 트리즈(TRIZ)에 대해 설명하시오.
112. Six Sigma에서 사용하는 공정 능력 지수인 DPU, DPO, DPMO에 대해 정의하고 예제에서 DPU, DPO, DPMO을 각각 구하시오.
113. 6시그마 추진 방법 중 DMAIC와 DMADV 비교
114. 몬테카를로 시뮬레이션(Monte-Carlo Simulation)
115. 인시던트(Incident)관리와 문제(Problem)관리

## Part 9 정보 시스템 감리
116. 감리(監理)와 감사(監査), 정보화 사업 과정에서 발생할 수 있는 Issue
117. IT Audit(감리)를 정의하고 감리원의 역할과 감리의 목적
118. 수석 감리원, 감리원 자격 기준
119. 공통 감리 절차 중 시정 조치 확인 과정
120. 감리 의무화 대상 판단 방법에 대한 플로우(Flow)
121. 감리 절차(발주자, 사업자, 감리 법인, 산출물 기준), 4가지 감리 형태
122. 감리 용어 7가지 이상 기술
123. 감리 프레임워크(Framework)와 감리 수행 절차
124. 현장 감리에서 수행되는 6단계 세부 절차
125. 상주 관리
126. 정보 시스템 개발 3단계 감리
127. 전자 정부 법에서 정의한 정보 시스템과 정보 시스템의 감리, 정보 시스템 감리 법인의 업무 범위
128. 감리 점검 체계
129. 정보 기술 아키텍처(ITA) 사업에 대한 정보 시스템 감리 Framework 및 중요 감리 점검 사항
130. ISP(Information Strategy Plan) 사업에 대한 정보 시스템 감리 Framework 및 중요 감리 점검 사항

## Part 10 자주 출제되는 토픽
131. 기업 경영환경 변화
132. 비즈니스 혁신(Business Innovation)
133. 엔지니어링 아웃소싱(Engineering Outsourcing)
134. 바이모달(Bimodal) IT
135. 커넥티드 서플라이 체인(Connected Supply Chain)
136. 공유경제(Sharing Economy)
137. O2O(Online to Offline, Offline to Online)
138. O4O(Online for Offline)
139. CPND(Contents, Platform, Network, Device)
140. 스마트팩토리(Smart Factory)의 주요 핵심기술
141. 스마트시티(Smart City) 통합플랫폼에 대해 설명하시오.
142. 디자인 씽킹(Design Thingking)
143. ISO22301(기업 비즈니스 연속성관리 국제표준)
144. 비즈니스 연속성계획(BCP : Business Continuity Plan)의 구성방안과 검사방안에 대해 설명하시오.
145. 빅데이터 분석방법인 Bagging과 Boosting 기법을 비교하여 설명하시오.
146. 빅데이터 프로세싱 아키텍처의 필요성, 람다(Lamda) 아키텍처와 카파(Capa) 아키텍처 비교
147. 빅데이터 분석플랫폼이 추구하는 데이터 통합아키텍처
148. 데이터 거버넌스(Governance)
149. 기업 경쟁력 제고를 위해 빅데이터(Bigdata) 분석의 중요성이 대두됨에 따라, 기업의 문제점을 체계적으로 파악하고 이를 해결하여 사업적 가치를 재평가하기 위해서는 통합적 빅데이터 프로젝트 수행이 필요하다. 빅데이터 분석의 특징을 설명한 후, 적절한 수행절차와 각 단계에서의 처리 내용을 설명하시오.
150. 로봇과 비즈니스의 융합인 로봇프로세스 자동화(RPA : Robotics process Automation)의 개념, 기반기술, 적용분야 및 시사점에 대하여 설명하시오.
151. 조직경쟁력 강화를 위해 데이터 기반의 인사이트를 활용하고자 한다. 이를 위한 분석주제 도출방안, 도출된 방안을 실행하기 위한 분석 거버넌스 수립방안에 대하여 설명하시오.
152. 정보시스템 감리와 사업관리 위탁(PMO : Project Management Office)을 비교 설명하시오.
153. 창업회사가 만든 사업계획서의 기술을 평가하여 가치를 산정하는 일들이 중요하게 대두되고 있다. 기술가치 평가에 대하여 다음을 설명하시오.
가. 기술평가의 정의와 일반적인 평가요소
나. 기술가치 평가와 기술사업타당성 평가의 비교
다. 기술가치 평가의 3가지 평가기법
154. 프로세스 마이닝 개념과 필요성, 기술요소와 연구분야, 적용사례에 대하여 설명하시오.
155. 정량적 위험분석 4가지 방법에 대하여 예시를 들어 설명하시오.
가. 민감도 분석(Sensitivity Analysis)
나. 금전적 기대값 분석(Expected Monetary Value Analysis)
다. 의사결정나무분석(Decision Tree Analysis)
라. 몬테카를로 시뮬레이션(Monte Carlo Simulation)
156. IT 컴플라이언스(Compliance)의 주요 요구사항을 제시하고 기업의 IT 컴플라이언스 위협대응방안을 인식전환, 제도 및 기술측면에서 설명하시오.
157. 발주처는 BPR/PI 컨설팅 사업의 결과물에서 정성적 기대효과 뿐만 아니라, 정량적인 기대효과도 명확히 제시받기를 기대한다. 그러나 현재(As-Is) 업무 프로세스가 제대로 분석되었는지에 대한 신뢰성(Reliability) 부족과 미래(To-Be)개선 프로세스로 전환된 이후에 정량적 목표가 제대로 달성될지 여부에 대한 가시성(Visibility) 부족이 문제점으로 대두되고 있다. 최근 이러한 문제점을 개선하고 미래 비즈니스 프로세스의 정보자원배치를 최적화하기 위한 시뮬레이션(Simulation) 기법이 활용되고 있는데, 이 과정에서 진행되는 시뮬레이션의 개념, 진행 절차, 특징 및 정량적 지표(KPI) 도출 등에 대하여 설명하시오.
158. A사는 노후화된 서버의 기존시스템(Legacy System)을 신규시스템(Target System)으로 이관(Migration) 작업을 수행하려 한다. 아래의 내용을 설명하시오.
가. 주요 이관대상
나. 성공적 시스템 이관(Migration)을 위한 절차
다. 주요 고려사항
159. 시스템(System) 및 서비스(Service) 간의 연계 방식인 EAI, ESB, API Gateway, Service Mesh에 대해 설명하시오.
160. 디지털 전환(Digital Transformation)시대의 플랫폼(Platform) 역량 특성과 기업 대응전략에 대해 설명하시오.
161. 공공기관에서 보유하고 있는 다양한 데이터를 개방하여 국민들이 보다 쉽게 사용할 수 있도록 개방하고 있다. 이런 개방되는 공공 데이터의 품질을 관리하기 위한 공공데이터 품질관리 수준평가체계에 대해 설명하시오.

# 8 데이터베이스
- 2019년 03월 15일
- https://www.yes24.com/product/goods/70930883

## Part 1. DB 기초 및 특징
1. 정보, 지식, 지혜
2. DB의 정의와 특성(구조)
3. DB의 특징과 장·단점
4. DB의 생성 목적과 구성 요소
5. ANSI/SPARC 구조
6. 기존 File System의 문제점과 DBMS의 장점
7. DBMS(Data Base Management System)의 정의, 역할, 필수 기능, 장·단점
8. 스키마(Schema)와 인스턴스(Instance), DDL(Data Definition Language), DML(Data Manipulation Language), DCL(Data Control Language)
9. DB의 절차 언어(Procedural language)와 비 절차 언어(Non-Procedural)
10. DB의 생명주기(Life Cycle)와 설계 과정
11. DB의 설계 과정인 기획, 분석, 설계, 구현 과정에서의 Activity와 산출물
12. DB의 3-Schema(스키마) 구조의 정의와 실제 사용 예 (장·단점)
13. DB의 Data 독립성
14. DB의 속성(Attribute)
15. DB의 속성(Attribute)의 종류

## Part 2. DB 모델링(Modeling)
2-1) ER(Entity Relationship) 다이어그램 및 관계 대수
16. Data Modeling의 절차
17. ER(Entity Relationship) 다이어그램 표기법
18. ER Model의 작성 절차
19. ER Model의 연결 함정
20. 야구 선수와 야구팀이라는 두 개의 Entity Type에 대해 다음의 요구 사항을 참조하여 ER Schema를 그리시오. (단 Total/Partial 참여, 몇 대 몇인지의 관계, Key등을 명시할 것)
21. EER(Enhanced ER) Model
22. 다음 TRUCK과 CAR에 대해 일반화(Generalization) 완성
23. Database에서 사용되는 관계 대수(Relational Algebra)의 연산자와 연산자 실행 예
24. Relation T1과 T2에 대해 각 연산을 수행한 결과를 보이시오
25. 다음 ER Diagram을 참조하여 질문에 답하시오.
26. 다음 relation들과 제약 조건을 참조하라.
27. 다음 SQL DDL 문을 참조하라.
28. 아래 ER schema의 지점 entity type을 SQL CREATE TABLE 명령어를 이용하여 변환하라. (지점은 여기서 weak entity type 이다.)

2-2) 정규화(Normalization)
29. DB에서 정규화(Normalization)의 수행 절차
30. DB에서 사용되는 Super Key, Primary Key, Alternate Key, Foreign(외래) Key
31. 외래키(Foreign Key)의 정의(목적), 다음 ERD(ER-Diagram)로 Relation을 생성한 후 사원의 부서를 외래키를 사용하여 알 수 있는 방법
32. Database에서 Key의 본질적 제약과 내재적 제약 설명
33. DB에서 함수적 종속성(Function Dependency)(암스토롱 공리)
34. DB에서 이상 현상(Anomaly)의 유형과 사례, 해결 방안
35. 아래의 Table과 주어진 속성간의 관계에서 발생되는 데이터의 입력, 삭제, 갱신 이상(Anomaly) 현상의 예를 기술하시오.
36. 아래 수강 Relation의 종속관계를 도식화하고 함수적 종속성의 유형에 대해 설명하시오.
37. 관계형 DB 설계 시 테이블 스키마(R)와 함수 종속성(FD)이 아래와 같이 주어졌을 때 다음 질문에 답하시오.
38. 아래 수강 과목 Relation은 제 3 정규형이다. BCNF(Boyce/Codd Normal Form) 정규형으로 변환하고 제 3정규형에서 삽입/갱신/삭제 이상에 대해서 설명하시오.
39. 아래 수강신청 Relation은 제 3 정규형이지만 BCNF 정규형이 아니다. 발생할 수 있는 이상 현상에 대해 설명하고 BCNF 정규형 Table로 설계하시오.
40. 제4정규형의 개념과 제약 조건, 제4차 정규형의 사례 설명
41. Database에서 비 정규화
42. 데이터 모델링 과정에서 반 정규화를 수행하는 이유와 각각의 유형
43. Database에서 반 정규화(역정규화, De-Normalization)

## Part 3. SQL(Structured Query Language)
44. SQL(Structured Query Language)의 3가지 언어
45. 다음 ER Diagram에서 Relation과 SQL Table을 작성
46. 다음 대학(University) 관계 Database에서 각 Query에 대해 SQL 검색문을 작성하고 결과를 도출하시오.
47. 앞 질문(대학 RDBMS)에서 다음 질문에 답하시오.
1) 등록 Table에서 중간 성적이 90점 이상인 학생의 학번과 과목번호(ORDER BY 이용)
2) 등록 테이블에서 과목번호가 “C312”인 중간성적에 5점을 더한 점수를 “학번”, “중간성적=”이란 Text 내용을 “시험”, 그리고 “점수”라는 열 이름으로 검색(새로운 열 이름이 명세된 검색)
3) 과목번호 “C413”에 등록한 학생의 이름, 학과, 성적을 검색(복수 Table 사용)

48. 앞 질문(대학 RDBMS)에서 다음 질문에 답하시오.
1) 같은 학과 학생들의 학번을 쌍으로 검색
단, 첫 번째 학번은 두 번째 학번보다 적게 하시오.(자기 자신의 Table에 조인하는 검색임)
2) 학생 Table에 학생수 검색(집계 함수를 이용)

49. 질문(대학 RDBMS)에서 다음 질문에 답하시오.
1) 학번이 300인 학생이 등록한 과목수
2) 과목 “C413”에 대한 중간 성적의 평균
3) 과목별 기발 성적(Final)의 평균을 검색(GROUP BY 이용)
4) 3명 이상 등록한 과목의 기말 평균 성적을 검색(HAVING 사용)

50. 질문(대학 RDBMS) 에서 다음 질문에 답하시오.
1) 과목번호 “C413”등록한 학생 이름 검색(부속 질의문 및 IN 이용)
2) 과목번호 “C413”에 등록하지 않은 학생의 이름 검색(부속 질의문을 사용하고 NOT IN을 이용)
3) 학생 “기사 1”과 같은 학과에 속하는 학생의 이름과 학과(Dept) 검색

51. 질문(대학 RDBMS) 에서 다음 질문에 답하시오.
1) 중간 성적이 90에서 95 사이의 행의 Sno, Cno, Midterm 출력(BETWEEN을 이용 검색)
2) 등록 Table에서 학번이 500인 학생의 모든 기말성적보다 좋은 학생의 학번과 과목 번호 검색(ALL 키워드 사용)
3) 과목 번호가 C로 시작하는 과목번호와 과목 이름 검색(LIKE를 이용한 검색 실시)

52. 질문(대학 RDBMS)에서 다음 질문에 답하시오.
1) 과목 “C413”에 등록한 학생의 이름 검색(EXISTS 검색을 사용)
2) 과목 “C413”에 등록하지 않은 학생의 이름 검색
3) 3학년이거나 또는 과목 “C324”에 등록한 학생의 학번 검색(UNION 사용)

53. 질문(대학 RDBMS)에서 다음 질문에 대해 SQL문을 생성하시오. (UPDATE문 사용)
1) 학번이 300인 학생의 학년을 2로 변경
2) “CA”과목의 학점(Credit)을 2학점 증가
3) “CA”와 학생의 기말 성적을 5점씩 가산
4) 모든 4학년 학생의 학과를 “보안”과목을 개설한 학과로 갱신

54. DB에서 SQL View에 대해서 설명하시오.

## Part 4. 회복 기법 및 Backup 기법
55. 회복(Recovery) 기법의 종류
56. 즉시 갱신 기법(Immediate Update)과 지연 갱신 기법(Deferred Update)
57. Checkpoint 회복 기법
58. 그림자(Shadow) Paging 회복 기법과 Media 회복 기법
59. CDP(Continuous Data Protection)
60. Backup 방법
- 전체 백업(Full Backup)
- 증분 백업(Incremental Backup)
- 차등 백업(Differential Backup)
- 합성 백업(Synthetic Full Backup)

## Part 5. 병행 제어
61. Transaction 의 상태 전이도와 4가지 특성(ACID)
62. DBMS에서 동시성(Concurrent, 병행성) 제어 방법의 종류와 장·단점
63. DBMS 병행처리와 병행제어 정의, 병행처리시의 문제점들과 대책
64. Transaction 스케줄링(Scheduling)의 종류
65. 프로그램 병행성에 대해 다음 물음에 답하시오.
(1) 병행 프로그래밍에서 인터리빙(Interleaving) 동작 방식
(2) 아래와 같이 두 개의 Process P1과 P2가 병행 실행되는 경우 모든 가능한 인터리빙을 보이시오.

66. 다음 각 T1과 T2는 A에 1을 더하는 연산(Task)이다. Transaction 들에서 아래 질문에 답하시오.
문1) 위의 Transaction들로부터 발생할 수 있는 충돌 직렬
불가능(Conflict Non-Serializable)한 스케줄링 작성
문2) 문1)에서 작성된 스케줄링에서 발생할 수 있는 문제점을 설명

67. 다음 Schedule은 직렬 불가능(Non-Serializable)하다. 각 Task의 수행 결과 원하는 값과 실제 수행 값을 표기하고 문제점과 직렬화하기 위한 방안은 무엇인지 설명하시오.(R은 Read, W는 Write를 의미)
68. 아래 두 개의 Task T1과 T2가 하나의 DB에 동시 수행 시(Concurrency) 발생할 수 있는 문제로 갱신 유실 문제(Lost Update Problem), 오류 읽기 문제(Temporary Update(Dirty Read) Problem), 잘못된 요약 문제(Incorrect Summary Problem)가 발생할 수 있다. 각각의 경우에 대해 예를 들어 설명하시오.
69. 아래 두 개 Task에서 Serial(직렬) 스케줄의 예와 Non-Serial 스케줄의 예를 각각 2가지 이상 표현하시오.
70. 로킹(Locking Protocol)에 대해 설명하고 아래 T1과 T2가 동시에 수행 시 직렬화(Serializability) 스케줄이 불가능한 경우의 예제를 들어 설명하시오.
71. (1) 2PL(Two Phase Locking)에 대해 설명하고 2PL의 장·단점 설명
(2) 아래의 T1, T2의 Transaction에 대해 2PL을 적용한 스케줄과 2PL 적용 결과

72. Transaction 동시성 제어 방법인 2PL(Two Phase Locking)기법에 대해 설명하고 2PL 기법의 유형에 대해 설명하시오.
73. DB에서 Transaction 시 동시성 제어 방법인 Time Stamp Ordering 기법
74. DB에서 Transaction 시 동시성 제어 방법인 낙관적(Validation) 검증 기법
75. DB에서 교착 상태(Deadlock) 발생 원인과 해결 방안
76. 교착 상태 회피 기법인 Wait-Die & Wound-Wait 기법에 대해 설명하고 아래 4개 Transaction 에 대해 Wait-Die 와 Wound-Wait 기법 적용시의 수행 과정 최초 수행은 T2가 Data Item X를 Lock 하고 있는 상태라고 가정한다.
77. 다음 4개의 Transaction의 직렬화(Serializability) 방법 표기와 교착 상태(Deadlock)를 탐지할 수 있는 대기 그래프(Wait-for Graph)를 작성하시오. 또한 직렬화를 보장하기 위한 Transaction의 순서를 설명하시오.

## Part 6. 해싱(Hashing)
78. 해쉬 함수(Hash Function)의 4가지 특징(필수 요건)
79. UNDO, REDO, ACID, DBMS, SQL, INDEX, HASH, BTREE, ERR의 데이터에서 해싱(Hashing)을 이용하여 ACID와 FDA가 존재하는지를 검색해 보는 과정을 기술하시오.
Hash 함수는 Division(나누기) 방법인 f(h) = x mod m (x: 나머지, m: 버킷(Bucket)을 사용하시오.(아래 EDCDIC Code Table을 활용하여 Hash 함수를 구하고 Bucket 수는 10개 이고 한 개의 Bucket에는 2개의 Data를 저장할 수 있음)
80. 해싱(Hashing) 함수의 종류와 Hashing 의 장·단점
81. Hashing, Hash Table, Hash Function에 대해 각각 정의하고 Hashing 충돌과 해결방법
82. Hashing 충돌 해결 방법인 선형 탐색(Linear Probing) 기법과 예를 제시하고 설명
83. Hashing 충돌 해결 방법인 체인닝(Chaining) 기법과 예를 제시하고 설명

## Part 7. DB 응용
84. DW(Data Warehouse)의 구성요소와 구축 방법
85. DW(Data Warehouse)의 구성요소와 구축 절차(2교시형)
86. 데이터 마이닝(Mining) (1교시형)
87. 데이터 마이닝(Mining) (2교시형)
88. Data Mining 기법 중 연속(Sequence ) 규칙, 분류(Classification) 규칙, 데이터 군집화(Clustering) 규칙에 대해 정의하고 각각의 사례를 들어 설명하시오.
89. Data Mining 기법 중 연관 규칙의 지지도(Support), 신뢰도(Confidence), 향상도(Lift)에 대해 예를 들어 설명하시오.
90. Data Mining의 단계별 Activity에 대해 설명하고 OLAP와 비교
91. Web Mining (1교시형)
92. Web Mining 의 유형, 구조, 절차
93. ETL (Extraction, Transformation, Loading)
94. 오피니언(Opinion) Mining
95. Stream Data Mining

## Part 8. DB의 종류
96. DBMS의 기능과 발전단계, RDBMS, OODBMS, ORDBMS 비교
97. MMDB
98. Hybrid MMDB
99. 생체 인식 Database
100. 생체 인식 DB의 적용분야와 문제점, 요구사항, 전망
101. 생체 인식(Biometrics)에 대해 설명하시오.
102. 멀티미디어(Multi-Media) Database
103. XML Database
104. Tiny DB
105. NoSQL Database
106. Streaming DBMS
107. Embedded DB (1교시형)
108. Embedded DB (2교시형)
109. 분산(Distributed) Database의 종류와 일반 Database와 비교 설명
110. 분산 DB에서 Data의 분할(Partition)과 할당(Allocation) 전략
111. 분산 데이터베이스의 3가지 설계 전략을 비교하고, 분산 Database가 갖추어야 할 4가지 특성
112. 분산 DB의 Issue와 해결방안에 대해 설명하고 분산 DB 구축시의 고려사항
113. 2PC(Phase Commit)

## Part 9. DB 품질 관리
114. Data 표준화의 필요성과 원칙
115. 메타데이터(MetaData)
116. 데이터 품질 기준으로 유효성과 활용성으로 분류할 수 있다. 완전성, 정확성, 일관성에 대해 예를 들어 설명하시오.
117. DRM(Data Reference Model)
118. DQM(Data Quality Management)
119. DQM3(Data Quality Management Maturity Model)
120. DB System 개발 과정 시 무결성 확보 방안(개체/참조/영역/업무 무결성)
121. Database에서 Data 프로파일링(Profiling)

## Part 10. DB 성능 향상
122. DB 성능 개선을 위한 평가 항목과 성능 개선 절차
123. DB 성능 개선을 위해 Hardware와 Software 측면에서 개선 가능한 항목
124. DB Table Partition의 유형과 특징
125. DB 성능 향상을 위한 Partition의 정의, 장점, 필요성, 유형, 적용 시 고려할 사항
126. 샤딩(Sharding)-대용량 데이터 처리
127. DB 튜닝(Tuning)의 3단계와 튜닝의 기대 효과
128. AVL Tree 불균형, 균형 유지 이유
129. m-원 탐색 Tree 특징
130. B-Tree
131. B -Tree 삽입
132. B -Tree 삭제
133. B+ -Tree
134. B+ -Tree 삽입
135. B* -Tree Key 분리
136. B* -Tree 키 값 분배
137. R-Tree
138. T-Tree
139. Tree 발전 과정 및 비교

## Part 11. DB 감리, 보안, Service
140. DB 보안(Security)
141. BigData 어플라이언스(Appliance)
142. DB 구축 사업에 대한 정보시스템 감리 Framework를 제시하고 감리 점검 사항
143. DB에서 사용되는 래퍼(Wrapper)와 미디에이터(Mediator)
144. DB에서 CDC(Change Data Capture)
145. Data Masking
146. 중복 제거(De-Duplication)
147. 서버 가상화(Server Virtualization)에서 하이퍼바이저(Hypervisor)와 전 가상화(Full-Virtualization)와 반 가상화(Para-Virtualization)
148. SAN(Storage Area Network)과 NAS(Network Attached Storage)를 비교
149. Cloud Computing에서 개인 사용자와 기업 사용자는 보안 요구 사항이 다르다. 개인 사용자와 기업 사용자 관점에서 우려되는 보안 문제를 각각 열거하고 대책을 설명하시오.
150. Crowd Sourcing
151. Paas(Platform as a Service)
152. 문서 중앙화
153. 서비스 제공 측면에서의 개인화(Personalization)

## Part 12. 정규화, 논리모델링, 데이터 품질
154. 전사 아키텍처(EA, Enterprise Architecture) 정의, 개념 설명
155. 정보요구사항에 대한 생명주기(Life Cycle)와 정보요구사항의 유형
156. 정보요구사항 관리 프로세스
157. 정보요구사항 우선순위 결정 방법 : 화폐가치 산출 방법과 상대적 중요도 산정방법
158. 데이터 표준을 위한 표준단어, 표준도메인, 표준코드, 표준용어
159. 기본키, 외래키, 대체키, 슈퍼키, 후보키 식별
160. 주식별자의 유일성, 최소성, 불변성, 존재성, 대표성
161. 식별자와 비식별자 관계
162. 식별자 유형, 식별자 및 비식별자로만 관계 설정 시 문제점 및 비교
163. 사원과 부서 엔터티 타입에서 관계차수(Cardinality)와 필수 및 선택사양
164. 엔터티(Entity) 타입의 특징 및 분류
165. 슈퍼타입(Super-type)과 서브타입(Sub-type)
166. 약(Weak) 엔터티, 슈퍼-서브타입 엔터티, 행위 엔터티
167. 정규화 위배사항을 식별하여 정규화(Normalization) 수행
168. M:M 관계 해소
169. 데이터 모델링의 필요성, 모델링 단계, 모델링 기본원칙, 좋은 데이터 모델의 요소
170. 아래 지문에 대해 논리 데이터 모델을 작성하시오.
171. 아래 지문에 대해 논리 데이터 모델을 작성하시오.
172. 아래 지문에 대해 논리 데이터 모델을 작성하시오.
173. 아래 지문에 대해 논리 데이터 모델을 작성하시오
174. 반정규화의 수평분할과 수직분할
175. 데이터관리를 위한 업무 규칙(Business Rule)의 현업 경험 사례, 문제점, 개선방안
176. 데이터관리를 위한 요구사항관리의 현업 경험 사례, 문제점, 개선방안
177. 데이터관리를 위한 품질특성의 한계성과 개선방안
178. 빅데이터(BigData) 큐레이션(Curation)
179. 빅데이터(BigData) 거버넌스(Governance)
180. 디지털 큐레이션(Curation)
181. 차세대 분석(Next Generation Anaysis)
182. 중복제거(De-Duplication)
183. 순환관계(Recursive Relationship) 엔터티와 Arc(Mutually Exclusive-배타적) 엔터티

# 9 인공지능
- 2021년 06월 14일
- https://www.yes24.com/product/goods/102277640

## PART 1. 인공지능(人工知能, Artificial Intelligence)의 개요
1. 인공지능(Artificial Intelligence)의 역사
2. 인공지능
3. 약 인공지능(Weak AI), 강 인공지능(Strong AI), 초 인공지능(Super AI)
4. 인공지능(AI)의 특이점(Singularity)
5. 아실로마(ASILOMA) AI(인공지능) 원칙
6. 규칙기반모델
7. 추천엔진(Recommendation Engine)
8. 전문가시스템(Expert System)
9. 정규표현식과 유한 오토마타
10. 유한 오타마타(Finite Automata)
11. 튜링테스트(Turing Test)
12. 에이전트(Agent) - 1교시형 답안
13. 에이전트(Agent) - 2교시형 답안
14. 킬 스위치(Kill Switch)
15. 트롤리 딜레마(Trolley Dilemma)
16. 인공지능(AI) 윤리의 개념, 주요 사례, 고려사항 및 추진 방향
17. 이용자 중심의 지능정보사회를 위한 원칙

## PART 2. 인공지능 알고리즘(Algorithm)
18. 유전자 알고리즘(Genetic Algorithm)
19. 그리디 알고리즘(Greedy Algorithm)
20. 상관분석(Correlation Analysis)
21. 회귀분석(Regression Analysis)
22. 로지스틱 회귀분석(Logistic Regression Analysis)
23. 군집분석(Cluster Analysis) - 1교시형 답안
24. 군집분석(Cluster Analysis) - 2교시형 답안
25. 계층적 군집분석(Hierarchical Clustering)
26. 자카드(Jaccard)계수
27. 해밍거리(Hamming Distance)
28. 유클리디안 거리(Euclidean Distance)
29. 유클리디안 거리(Euclidean Distance)를 계산하시오.
30. 마할라노비스 거리(Mahalanobis Distance)를 계산하시오.
31. Apriori(연관규칙) 알고리즘
32. 지지도(Support), 신뢰도(Confidence), 향상도(Lift)
33. 사례1(TV 구입시 DVD 구입), 사례2(우유 구입시 주스 구입)에 대해 연관규칙(지지도, 신뢰도, 향상도)을 제시하시오.
34. 앙상블학습(Ensemble Learning)
35. 머신러닝(Machine Learning)에 활용, 앙상블(Ensemble) 기법
36. Bagging과 Boosting 비교
37. 랜덤 포레스트(Random Forest)
38. 의사결정트리(Decision Tree)
39. K-NN(K-Nearest Neighbor)
40. 시계열 분석
41. 시계열 분석(ARIMA)
42. SVM(Support Vector Machine)- 1교시형 답안
43. SVM(Support Vector Machine)- 2교시형 답안
44. 베이즈(Bayes)정리
45. 크기와 모양이 같은 공이 상자 A에는 검은 공 2개와 흰공 2개, 상자 B에는 검은공 1개와 흰공 2개가 들어 있다. 두 상자 A, B 중 임의로 선택한 하나의 상자에서 공을 1개 꺼냈더니 검은공이 나왔을 때, 그 상자에 남은 공이 모두 흰공일 확률은? (베이즈(Bayes)정리를 활용하시오)
46. K-Means
47. DBSCAN(Density Based Spatial Clustering with Application Notes)
48. 차원축소(Dimensionality Reduction)
49. 특징추출(Feature Extraction)
50. 주성분 분석, PCA(Principal Component Analysis)
51. 독립성분분석, ICA(Independent Component Analysis)
52. 마르코프 결정 프로세스(Markov Decision Process, MDP)
53. 은닉 마르코프 모델(HMM-Hidden Markov Model)
54. 몬테카를로 트리 탐색(MCTS)
55. Q-Learning
56. Tokenization(토근화), N-gram
57. Word2Vec
58. Word2Vec학습모델, CBOW(Continuous Bag Of Words), Skip-gram

## PART 3. 심층 신경망 상세
59. 일반적인 프로그램 방식과 Machine Learning(기계학습) 프로그래밍 방식
60. AI(Artificial Intelligence), ML(Machine Learning), DL(Deep Learning)
61. 기계학습(Machine Learning)
62. 지도학습(Supervised Learning)
63. 비지도(비감독)(Unsupervised Learning)학습
64. 강화학습(Reinforcement Learning)
65. 딥러닝(Deep Learning)
66. MCP(McCulloch-Pitts)뉴런(Neuron)
67. 헵 규칙(Hebb Rule)
68. 퍼셉트론(Perceptron)
69. 아달라인(Adaline- Adaptive Linear Neutron)
70. 활성화 함수(Activation Function) - 1
71. 활성화 함수(Activation Function) - 2
72. 신경망 학습 - FFNN(Feed Forward Neural Network)
73. 딥러닝(Deep Learning)의 파라미터(Parameter)와 하이터파라미터 (Hyperparameter)를 비교하고 하이퍼파라미터의 튜닝방법을 설명하시오
74. 역전파법(Back-Propagation)
75. 기울기 소실 문제(Vanishing Gradient Problem)
76. 경사하강법(Gradient Descent)
77. 과적합(Overfitting)과 부적합(Underfitting), 적합(Bestfitting)
78. 과적합(Overfitting)과 부적합(Underfitting) 해결방안
79. Dropout
80. ANN(Artificial Neural Network)
81. DNN(Deep Neural Network)
82. CNN(Convolution Neural Network)
83. RNN(Recurrent Neural Network)
84. LSTM(Long Short-Term Memory)
85. GRU(Gated Recurrent Unit)
86. RBM(Restricted Boltzmann Machine)
87. DBN(Deep Belief Network)
88. DQN(Deep Q-Network)
89. GAN(Generative Adversarial Networks) [ GAN의 이해 ]
90. DL4J(Deep Learning 4J)
91. 혼동행렬(Confusion Matrix)
92. Machine Learning(기계학습)의 평가방법-Accuracy(정확도), Recall(재현율), Precision(정밀도)
93. F1 Score

## PART 4. 인공지능 활용
94. 음성인식기술, ASR(Automatic Speech Recognition), NLU(Natural Language Understanding)
TTS(Text to Speech)
95. 음성인식(Voice Recognition)
96. 챗봇(ChatBot)
97. 가상개인비서(Virtual Personal Assistant)
98. 패턴인식(Pattern Recognition)
99. 머신러닝 파이프라인(Machine Learning Pipeline)
100. 자연어 처리
101. 엑소브레인(Exobrain)
102. 엑소브레인(Exobrain)과 Deepview 기술요소
103. 딥뷰(Deepview)
104. SNA(Social Network Analysis)
105. 텐서플로(Tensorflow)
106. 파이션(Python)의 특징 및 자료형(Data Type)
107. 패션 의류용 이미지를 분류하는 다층 신경망을 들려고 한다. 의류용 이미지는 바지, 치마, 셔츠 등 10가지 유형의 흑백 이미지(32*32 pixels)로 구성되어 있고, 학습에 투입할 이미지 데이터는 검증 및 테스트용 데이터를 제외하고 총 48,000장이다. 입력층, 은닉층, 출력층의 완전연결(fully connected) 3계층으로 구성되어 있고 은닉층의 뉴런개수는 100개일 때, 다음에 대하여 설명하시오
가. 신경망 구성도
나. 입력층의 입력개수, 출력층의 뉴런 개수, 학습할 가중치와 절편의 총 개수
다. 원핫인코딩(One-Hot Encoding)과 소프트맥스(Softmax)함수

## PART 5. 기출 및 예상 토픽
108. GPU(Graphic Processing Unit)와 CPU(Central Processing Unit)의 차이점
109. 머신러닝 모델은 학습과 함께 검증 및 평가 과정이 필요하다
가. 교차검증(k-fold Cross Validation)기법에 대해 설명하시오
나. 머신러닝 모델의 평가방법에 대하여 설명하시오
110. 머신러닝 보안 취약점에 대해 설명하시오.
가. 머신러닝 학습과정에서의 적대적 공격 4가지
나. 각각 적대적 공격의 방어 기법
111. 데이터 어노테이션(Data Annotation)
112. AIaaS(AI as a Service)와 도입시 고려사항
113. 전이 학습(Transfer Learning)
114. Pre-Crime
115. 인공신경망의 오류 역전파(Backpropagation) 알고리즘
116. 머신러닝(Machine learning)의 학습방법은 크게 3가지[지도학습(Supervised Learning), 비지도 학습(Unsupervised Learning), 강화학습(Reinforcement Learning)]로 분류한다. 인공지능소프트웨어 개발 프로세스를 V 모델 기준으로 도식화하고 관련기술의 최신동향 및 안전취약점을 설명하시오
117. 인공지능 개발과정에서 중점적으로 점검할 항목
118. 인공지능 데이터 품질 요구사항
119. 몬테카를로(Monte Carlo) 트리(Tree) 탐색(MCTS)
120. 디지털 카르텔(Digital Cartel)
121. XAI(eXplainable AI)
122. 인공지능(AI) 데이터 평가를 위한 고려사항

# 10 클라우드
- 2024년 09월 25일
- https://www.yes24.com/product/goods/133748065

## PART 1. 클라우드(Cloud)의 개요
1. Cloud Computing(클라우드 컴퓨팅)
2. Cloud Computing의 특징
3. Cloud Computing의 구성요소와 기술요소
4. Cloud Computing의 서비스와 핵심기술
5. Cloud Computing의 공통 개념과 6대 핵심기술, 9대 주변기술
6. Cloud Computing의 핵심 및 주변기술
7. 인터 클라우드(Inter-Cloud)
8. 멀티 클라우드(Multi-Cloud)
9. 하이브리드 클라우드(Hybrid Cloud)
10. Mobile Cloud
11. Cloud Computing 서비스 유형(전개 모델)
가. 클라우드 컴퓨팅의 계층구조
나. 클라우드 컴퓨팅의 서비스 유형 개념도 및 분류
다. 클라우드 컴퓨팅 서비스 유형 비교(Public vs Private)
12. Private, Public, Hybrid Cloud
13. Cloud Computing 서비스별 SLA 요구사항
14. Personal Cloud(퍼스널 클라우드)
15. Sovereign Cloud(소버린 클라우드)
16. Metacloud(메타 클라우드)
17. 유틸리티 컴퓨팅(Utility Computing)
18. 그리드 컴퓨팅(Grid Computing)
19. SBC(Server Based Computing)
20. Cloud 관리 플랫폼의 정의 및 필요성, 필수 기능, 플랫폼 선정기준, 기대효과

## PART 2. 클라우드(Cloud)의 서비스(Service)
21. 사설(Private) Cloud, 공용(Public) Cloud, 하이브리드(Hybrid)
22. Cloud Computing의 서비스 전달 방식
23. IaaS, PaaS, SaaS의 모델 분류와 SLA 특징
24. DaaS(Datacenter as a Service)
25. XaaS(Everything as a Service)
26. Cloud Computing과 XaaS 비교
27. TaaS(Testing as a Service)
28. BaaS(Backend as a Service)-1
29. BaaS(Backend as a Service)-2
30. 서버 호스팅, 베어 메탈, 클라우드 서버 비교
31. CSB(Cloud Service Broker)
32. CSB(Cloud Service Brokerage)
33. 클라우드 SLA(Cloud Service Level Agreement)의 유형, 특징, 카탈로그
34. 서버리스 아키텍처(Serverless Architecture)

## PART 3. 가상화(Virtualization)
35. 가상화(Virtualization)의 원리
36. 가상화(Virtualization)의 유형과 효과
37. 가상화(Virtualization)의 목적과 기술
38. 서버 가상화(Server Virtualization)
39. 데스크탑 가상화(Desktop Virtualization)-1
40. 데스크탑 가상화(Desktop Virtualization)-2
41. Desktop 가상화에서 Boot Storm 발생원인과 해결방안
42. 대표적인 가상화(Desktop, Server, Network, OS, Process 등)의 개념과 적용효과, 사례를 설명하시오.
43. Desktop 가상화의 유형과 적용사례
44. 현재 사용 중인 PC의 가상화 도입 필요성과 가상화 환경과의 비교 설명하시오.
45. 정보 System에서 가상화(Virtualization)기술 활용 효과에 대해 설명하시오.
46. 스토리지(Storage) 가상화
47. Desktop 가상화와 Disk(Storage) 가상화
48. Application 가상화
49. 서버 가상화 방법 중 Hardware 파티셔닝(Partitioning) 기법 2가지와 활용효과
50. 가상화(Virtualization), 전(Full)가상화, 반(Para)가상화
51. 가상머신(Virtual Machine)과 컨테이너(Container) 비교
52. 컨테이너 가상화(Container Virtualization)
53. 가상화 기술인 도커(Docker)
54. 가상화를 실현하기 위해 OS와 Hardware 사이에 구현하는 VMM(Virtual Machine Monitor)에 대해 설명하시오.
55. Cloud System 구축을 위한 핵심기술인 가상화 관련 기술 중 가상머신과 컨테이너를 비교하여 설명하시오.
56. Zero PC
57. Zero Client
58. Thin Client

## PART 4. 클라우드 네트워크(Network)
59. SDN(Software Defined Network)
60. Network 기술 중 SDN(Software Defined Network)과 NFV(Network Function Virtualization)의 구조와 특징을 비교 설명하시오.
61. 네트워크(Network) 가상화 기술인 VLAN(Virtual LAN), VPN(Virtual Private Network), NFV(Network Function Virtualization)를 비교하여 설명하시오.
62. A 기업은 신규로 클라우드 존을 구성하려고 한다. 다음에 대하여 설명하시오.
가. 다음 조건을 고려한 Cloud 공통 인프라(보안, N/W) 아키텍처 조건
나. 다음 조건을 고려한 Cloud 서버(Web, WAS, DB) 아키텍처 조건
63. 3-Tier Network 아키텍처의 장단점과 3-Tier Network 아키텍처의 단점을 보완한 Spine-Leaf 아키텍처의 장단점을 설명하시오.
64. Spine-Leaf 구조
65. 티밍(Teaming)과 본딩(Bonding)
66. 네트워크 스토리지(Network Storage)
67. iSCSI(Internet Small Computer Small Interface)
68. NFS(Network File System), CIFS(Common Internet File System)
69. 엣지 데이터센터(Edge Datacenter)
70. 뉴트론(Neutron)

## PART 5. 클라우드 스토리지(Storage)
71. 스토리지 티어링(Storage Tiering)
72. 프로비저닝(Provisioning)
73. 스토리지 프로비저닝(Provisioning)
74. 스토리지 풀(Storage Pool)에서 논리적 Disk를 생성, 할당, 확장할 때 고려되어야 할 사항과 그 장점에 대해 설명하시오.
75. 통합 스토리지(Unified Storage)
76. 오브젝트 스토리지(Object Storage)
77. Storage 유형(Block / File / Object Storage)
78. DAS(Direct Attached Storage), NAS(Network Attached Storage), SAN(Storage Area Network)
79. SAN(Storage Area Network)
80. IP-SAN
81. Disk를 병렬화 할 때 사용하는 미러링(Mirroring), 데이터 스트라이핑(Data Striping), 비트 레벨 스트라이핑(Bit Level Striping), 블록 레벨 스트라이핑(Block Level Striping) 방법의 특징에 대해 각각 설명하시오.
82. RAID 5
83. RAID 0, 1, 5, 1+0
84. VTL(Virtual Tape Library)
85. VTL(Virtual Tape Library) 유형과 활용효과
86. Open Stack Swift(오픈 스택 스위프트)

## PART 6. 클라우드 보안(Security)
87. Cloud Computing 보안
88. SEcaaS(SEcurity as a Service)
89. Cloud Computing의 멀티테넌시(Multi-Tenancy) 보안에 대하여 설명하시오.
90. 클라우드 서비스 보안 인증(CSAP)
91. ISO/IEC 27017
92. ISO/IEC 27018
93. CASB(Cloud Access Security Broker)
94. Cloud Forensic(포렌식)
95. Cloud 환경에서 기존 보안기술을 가상화 환경에 적용했을 때 한계점을 기술하고, 하이퍼바이저(Hypervisor) 기반의 가상화 침입 대응 기술에 대해 설명하시오.
96. BYOD(Bring Your Own Device) 보안위협과 해결방안

## PART 7. 기반 기술
97. 오토 스케일링(Auto Scaling)
98. 최근 부하분산을 위하여 클라우드 서비스에서 Auto Scale 기능을 많이 사용한다. 다음을 설명하시오.
가. Auto Scale Up과 Auto Scale Out 아키텍처 비교
나. 스케줄 기반의 Auto Scale과 부하 기반의 Auto Scale 기능 비교
99. Cloud Native(클라우드 네이티브)
100. 클라우드 네이티브 어플리케이션(Cloud Native Application)-1
101. 클라우드 네이티브 어플리케이션(Cloud Native Application)-2
102. 마이크로 서비스 아키텍처(Micro Service Architecture)
103. 쿠버네티스(Kubernetes)
104. 하이퍼바이저(Hypervisor)-1
105. 하이퍼바이저(Hypervisor)-2
106. 도커(Docker)
107. 컨버지드 인프라(Converged Infrastructure)
108. A기업이 HCI(Hyper Converged Infrastructure) 도입을 검토하고 있다. 다음에 대해 설명하시오.
가. HCI 개념
나. HCI 특징
다. HCI의 유형별 비교
109. 오픈 스택(Open Stack)
110. 디지털 트랜스포메이션(Digital Transformation)
111. VDI 도입 시 검사항목과 고려사항
112. VDI(Virtual Desktop Infrastructure) 프로토콜
113. VDI(Virtual Desktop Infrastructure) 효과와 리스크(Risk)에 대해 설명하시오.
114. VDI(Virtual Desktop Infrastructure)의 기술요소와 VDI 선정 시 검사항목
115. 기업에서 현재 운영하는 전산실을 클라우드(Cloud)로 전환하는 것을 검토하고 있다. 다음에 대해 설명하시오.
가. Cloud 전환 시 선정기준과 고려사항, 평가항목
나. Cloud 전환대상 분류 및 이행 절차
116. 정보시스템 구조 진단 방안
