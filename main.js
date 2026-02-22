document.addEventListener('DOMContentLoaded', () => {
    const quizForm = document.getElementById('quiz-form');
    const resultSection = document.getElementById('result-section');
    const resultContent = document.getElementById('result-content');

    quizForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(quizForm);
        let score = 0;
        let answeredQuestions = 0;

        // 라디오 버튼 질문 점수 계산
        for (let i = 1; i <= 5; i++) {
            const value = formData.get(`q${i}`);
            if (value) {
                score += parseInt(value, 10);
                answeredQuestions++;
            }
        }

        if (answeredQuestions < 5) {
            alert('모든 질문에 답변해주세요!');
            return;
        }

        let profile = '';
        let description = '';
        let animal_img = '';
        let bestRecommendation = {};
        let otherOptions = [];

        if (score <= 30) {
            profile = '안전지향 거북이';
            animal_img = 'https://i.imgur.com/n1mE2o2.png'; // 거북이 이미지
            description = '원금 손실을 최소화하는 안정적인 투자를 가장 선호하는군요. 마치 단단한 등껍질로 자신을 보호하는 거북이처럼, 당신은 예측 가능한 수익률을 중요하게 생각합니다.';
            bestRecommendation = {
                title: '국고채 3년물',
                ticker: 'KOFR',
                details: `
                    <p><b>[특징]</b> 정부가 보증하는 가장 안전한 채권입니다. 금리 변동에 따른 가격 변화가 적어 안정적인 이자 수익을 기대할 수 있습니다.</p>
                    <p><b>[투자 포인트]</b> 은행 예금보다 약간 높은 수익률을 추구하며, 포트폴리오의 '안전 마진'을 확보하는 데 최적입니다.</p>
                `
            };
            otherOptions = [
                '신한 SOL 미국 S&P 500 (H): 환율 변동 위험을 줄인 미국 대표 지수 투자',
                '맥쿼리인프라: 국내 주요 인프라 자산에 투자하여 꾸준한 배당금을 지급',
                '달러(USD) 예금: 대표적인 안전자산으로, 환차익을 기대할 수 있음'
            ];
        } else if (score <= 50) {
            profile = '신중한 코끼리';
            animal_img = 'https://i.imgur.com/5JT4SgG.png'; // 코끼리 이미지
            description = '무작정 뛰어들기보다는 신중하게 분석하고 결정하는 투자자시군요. 코끼리처럼 덩치는 크지만, 그만큼 발걸음 하나하나에 신중을 기하는 타입입니다.';
            bestRecommendation = {
                title: 'TIGER 미국배당다우존스',
                ticker: '360750',
                details: `
                    <p><b>[특징]</b> 10년 이상 꾸준히 배당금을 늘려온 우량 기업에 투자합니다. 안정적인 현금 흐름을 창출하는 기업들로 구성되어 있습니다.</p>
                    <p><b>[투자 포인트]</b> 꾸준한 배당금과 함께 장기적인 주가 상승을 함께 기대할 수 있어, 안정성과 성장의 균형을 맞추고 싶은 투자자에게 적합합니다.</p>
                `
            };
            otherOptions = [
                '삼성전자: 대한민국 1등 기업이자, 글로벌 반도체 시장의 리더',
                'S&P 500 지수 추종 ETF: 전 세계에서 가장 영향력 있는 500개 기업에 분산 투자',
                '판교/강남 핵심 권역 오피스 빌딩 (리츠 간접투자): 안정적인 임대 수익을 기대할 수 있음'
            ];
        } else if (score <= 70) {
            profile = '균형잡힌 부엉이';
            animal_img = 'https://i.imgur.com/qgWJ5dD.png'; // 부엉이 이미지
            description = '밤낮으로 세상을 살피는 부엉이처럼, 시장 전체를 넓게 바라보며 기회를 포착하는군요. 안정성과 수익성의 균형점을 찾아 현명하게 투자합니다.';
            bestRecommendation = {
                title: 'S&P 500 지수 추종 ETF (SPY)',
                ticker: 'SPY',
                details: `
                    <p><b>[특징]</b> 미국을 대표하는 500개 대형 기업에 한 번에 투자하는 효과를 가집니다. 가장 기본적인 '시장'에 투자하는 전략입니다.</p>
                    <p><b>[투자 포인트]</b> 장기적으로 가장 꾸준한 우상향을 보여준 지수입니다. 기술 혁신과 미국 경제의 성장을 믿는다면 최고의 선택입니다.</p>
                `
            };
            otherOptions = [
                '이더리움(ETH): 스마트 컨트랙트 플랫폼의 성장성에 투자',
                'TIGER 차이나전기차SOLACTIVE: 폭발적으로 성장하는 중국 전기차 시장에 투자',
                '코카콜라(KO): 50년 이상 배당을 늘려온 대표적인 배당킹 주식'
            ];
        } else if (score <= 90) {
            profile = '기회를 노리는 하이에나';
            animal_img = 'https://i.imgur.com/J3t0sN4.png'; // 하이에나 이미지
            description = '남들이 보지 못하는 기회를 포착하는 능력이 뛰어납니다. 하이에나처럼 끈기 있게 기다리다가, 확신이 들면 과감하게 베팅하여 높은 수익을 추구합니다.';
            bestRecommendation = {
                title: '엔비디아 (NVIDIA)',
                ticker: 'NVDA',
                details: `
                    <p><b>[특징]</b> AI 시대를 이끄는 독점적인 GPU 기술을 보유한 기업입니다. 데이터센터, 자율주행 등 미래 산업의 핵심입니다.</p>
                    <p><b>[투자 포인트]</b> 시장의 기대를 뛰어넘는 실적을 보여주며 폭발적인 성장을 이어가고 있습니다. 높은 변동성을 감수하고 최고의 수익률을 노리는 투자자에게 적합합니다.</p>
                `
            };
            otherOptions = [
                '비트코인(BTC): 디지털 금이라 불리며, 높은 변동성과 함께 높은 기대수익률을 가짐',
                'SOXL (3배 레버리지 반도체 ETF): 반도체 산업의 상승에 3배로 투자하여 수익을 극대화',
                '베트남/인도 등 신흥국 시장 투자 ETF: 높은 경제 성장률을 바탕으로 한 고수익 추구'
            ];
        } else {
            profile = '공격적인 불사조';
            animal_img = 'https://i.imgur.com/7b1Q1nL.png'; // 불사조 이미지
            description = '리스크를 두려워하지 않는 대담한 투자자! 마치 불사조처럼, 큰 하락에도 굴하지 않고 더 높이 날아오를 기회로 삼습니다. 시장의 변동성을 즐기며 최고의 수익률을 목표로 합니다.';
            bestRecommendation = {
                title: '비트코인 (Bitcoin)',
                ticker: 'BTC',
                details: `
                    <p><b>[특징]</b> 최초의 암호화폐이자 디지털 금으로 불리는 자산입니다. 탈중앙화된 가치 저장 수단으로 주목받고 있습니다.</p>
                    <p><b>[투자 포인트]</b> 극심한 변동성은 가장 큰 위험이자 기회입니다. 강력한 한 방을 노리는 공격적인 투자자에게 '하이 리스크, 하이 리턴'의 정수를 보여줄 것입니다.</p>
                `
            };
            otherOptions = [
                '테슬라(TSLA): 전기차와 AI, 로봇 기술을 결합한 파괴적 혁신 기업',
                'TQQQ (나스닥 100 3배 레버리지 ETF): 미국 기술주의 성장에 3배로 투자',
                '도지코인(DOGE): 강력한 커뮤니티를 기반으로 한 밈(Meme) 코인'
            ];
        }

        let resultHTML = `
            <img src="${animal_img}" alt="${profile}" style="width:150px; height:150px; margin-bottom: 20px;">
            <h3>당신은 ${profile}!</h3>
            <p>${description}</p>
            
            <div class="best-rec-card">
                <h4>⭐ 당신을 위한 최고의 투자 전략</h4>
                <p class="rec-title">${bestRecommendation.title} <span class="rec-ticker">(${bestRecommendation.ticker})</span></p>
                <div class="rec-details">${bestRecommendation.details}</div>
            </div>

            <h3>추가적으로 고려할 수 있는 자산군</h3>
            <ul>
                ${otherOptions.map(item => `<li>${item}</li>`).join('')}
            </ul>
            <p class="disclaimer">※ 본 결과는 재미를 위한 참고 자료이며, 실제 투자 결정은 개인의 판단과 책임 하에 신중하게 내리셔야 합니다.</p>
        `;

        resultContent.innerHTML = resultHTML;
        resultSection.style.display = 'block';
        resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});