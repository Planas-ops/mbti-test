// MBTI测试问题
const questions = [
    {
        question: "在社交场合中，你通常会：",
        optionA: "主动与很多人交谈，享受热闹的氛围",
        optionB: "与少数几个人深入交谈，更喜欢安静",
        dimension: "EI"
    },
    {
        question: "你更喜欢关注：",
        optionA: "现实中的具体细节和事实",
        optionB: "未来的可能性和抽象概念",
        dimension: "SN"
    },
    {
        question: "做决定时，你更倾向于：",
        optionA: "基于逻辑和客观分析",
        optionB: "考虑他人的感受和价值观",
        dimension: "TF"
    },
    {
        question: "你的生活方式更倾向于：",
        optionA: "有计划、有条理，喜欢确定性",
        optionB: "灵活、随性，喜欢保持选择",
        dimension: "JP"
    },
    {
        question: "在团队合作中，你通常：",
        optionA: "喜欢组织和协调大家的工作",
        optionB: "更愿意贡献想法，让别人来组织",
        dimension: "EI"
    },
    {
        question: "学习新知识时，你更喜欢：",
        optionA: "通过实际操作和具体例子",
        optionB: "通过理论和抽象概念",
        dimension: "SN"
    },
    {
        question: "当朋友遇到困难时，你首先会：",
        optionA: "帮TA分析问题，找到解决方案",
        optionB: "倾听TA的感受，给予情感支持",
        dimension: "TF"
    },
    {
        question: "周末你更喜欢：",
        optionA: "提前规划好要做的事情",
        optionB: "到时候再决定，随心而动",
        dimension: "JP"
    },
    {
        question: "你的精力来源主要是：",
        optionA: "与他人互动和社交活动",
        optionB: "独处和安静的个人时间",
        dimension: "EI"
    },
    {
        question: "描述事物时，你更倾向于：",
        optionA: "使用具体、准确的描述",
        optionB: "使用比喻和象征性的表达",
        dimension: "SN"
    },
    {
        question: "评价一个方案时，你更看重：",
        optionA: "方案的逻辑性和可行性",
        optionB: "方案是否符合团队的价值观",
        dimension: "TF"
    },
    {
        question: "面对截止日期，你通常：",
        optionA: "提前完成，不喜欢最后一刻的压力",
        optionB: "可能拖延，但最终会完成",
        dimension: "JP"
    },
    {
        question: "在聚会上，你更可能：",
        optionA: "成为焦点，享受被关注",
        optionB: "观察者，喜欢在角落里观察",
        dimension: "EI"
    },
    {
        question: "解决问题时，你更依赖：",
        optionA: "已有的经验和方法",
        optionB: "创新的思路和直觉",
        dimension: "SN"
    },
    {
        question: "当意见不合时，你倾向于：",
        optionA: "坚持自己的立场，据理力争",
        optionB: "寻找折中方案，维护和谐",
        dimension: "TF"
    },
    {
        question: "你的工作空间通常是：",
        optionA: "整洁有序，每样东西都有固定位置",
        optionB: "有些杂乱，但你知道东西在哪",
        dimension: "JP"
    },
    {
        question: "你更喜欢的工作环境是：",
        optionA: "有很多同事可以交流",
        optionB: "可以独自专注工作",
        dimension: "EI"
    },
    {
        question: "阅读时，你更喜欢：",
        optionA: "纪实类、实用性强的内容",
        optionB: "小说、哲学等抽象内容",
        dimension: "SN"
    },
    {
        question: "在冲突中，你更看重：",
        optionA: "公正和公平",
        optionB: "和谐和理解",
        dimension: "TF"
    },
    {
        question: "关于未来，你更倾向于：",
        optionA: "制定明确的计划和目标",
        optionB: "保持开放，顺其自然",
        dimension: "JP"
    }
];

// 16种人格类型
const personalityTypes = {
    INTJ: {
        name: "建筑师",
        description: "INTJ是独立、果断、有远见的战略家。你善于分析复杂系统，制定长期计划，并有决心实现自己的目标。你追求完美，对自己的能力有很高的标准。"
    },
    INTP: {
        name: "逻辑学家",
        description: "INTP是创新、好奇、善于分析的思想家。你喜欢探索抽象概念，解决复杂问题，对理论和知识有浓厚的兴趣。你独立思考，不喜欢被传统束缚。"
    },
    ENTJ: {
        name: "指挥官",
        description: "ENTJ是果断、有领导力、善于组织的策略家。你天生就是领导者，善于激励他人，实现目标。你逻辑清晰，效率至上。"
    },
    ENTP: {
        name: "辩论家",
        description: "ENTP是聪明、好奇、善于辩论的创新者。你思维敏捷，喜欢挑战传统观念，善于发现新的可能性。你享受智力上的交锋。"
    },
    INFJ: {
        name: "提倡者",
        description: "INFJ是理想主义、有洞察力、善于理解他人的指导者。你关心他人成长，善于看到人的潜力，有强烈的使命感。你追求有意义的生活。"
    },
    INFP: {
        name: "调停者",
        description: "INFP是理想主义、有同理心、忠于价值观的治愈者。你内心世界丰富，关心他人福祉，追求真实和有意义的生活。你有强大的创造力。"
    },
    ENFJ: {
        name: "主人公",
        description: "ENFJ是富有魅力、有领导力、善于激励他人的导师。你天生就是领导者，关心他人成长，善于建立和谐的关系。你有强烈的责任感。"
    },
    ENFP: {
        name: "竞选者",
        description: "ENFP是热情、有创造力、善于社交的激励者。你充满活力，善于激发他人热情，看到生活中的可能性。你追求真实和有意义的生活。"
    },
    ISTJ: {
        name: "物流师",
        description: "ISTJ是可靠、有责任心、注重细节的执行者。你遵守承诺，善于组织和执行，是团队中的稳定力量。你重视传统和秩序。"
    },
    ISFJ: {
        name: "守卫者",
        description: "ISFJ是温暖、细心、有责任心的守护者。你关心他人，善于照顾人，是可靠的伙伴。你重视和谐，愿意为他人付出。"
    },
    ESTJ: {
        name: "总经理",
        description: "ESTJ是果断、有组织能力、注重效率的管理者。你善于组织和领导，遵守规则，是可靠的执行者。你重视秩序和责任。"
    },
    ESFJ: {
        name: "执政官",
        description: "ESFJ是热情、有责任心、善于社交的关怀者。你关心他人福祉，善于建立和谐关系，是团队中的粘合剂。你重视传统和秩序。"
    },
    ISTP: {
        name: "鉴赏家",
        description: "ISTP是务实、独立、善于解决问题的实践者。你动手能力强，善于分析和解决实际问题，喜欢自由和灵活性。你冷静理性。"
    },
    ISFP: {
        name: "探险家",
        description: "ISFP是敏感、有艺术感、忠于价值观的艺术家。你有丰富的内心世界，追求真实和美好，善于通过艺术表达自己。你重视和谐。"
    },
    ESTP: {
        name: "企业家",
        description: "ESTP是精力充沛、务实、善于社交的实践者。你行动力强，善于抓住机会，享受当下的生活。你直接、果断。"
    },
    ESFP: {
        name: "表演者",
        description: "ESFP是热情、有活力、善于社交的表演者。你享受生活，善于让他人开心，是聚会中的焦点。你乐观、慷慨。"
    }
};

let currentQuestion = 0;
let answers = {
    EI: 0,
    SN: 0,
    TF: 0,
    JP: 0
};

function startTest() {
    document.getElementById('start-screen').classList.remove('active');
    document.getElementById('test-screen').classList.add('active');
    showQuestion();
}

function showQuestion() {
    const q = questions[currentQuestion];
    document.getElementById('question-text').textContent = q.question;
    document.getElementById('option-a').textContent = q.optionA;
    document.getElementById('option-b').textContent = q.optionB;

    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById('progress').style.width = progress + '%';
    document.getElementById('progress-text').textContent = `${currentQuestion + 1}/${questions.length}`;
}

function selectOption(option) {
    const q = questions[currentQuestion];

    if (option === 'A') {
        if (q.dimension === 'EI') answers.EI++;
        else if (q.dimension === 'SN') answers.SN++;
        else if (q.dimension === 'TF') answers.TF++;
        else if (q.dimension === 'JP') answers.JP++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('test-screen').classList.remove('active');
    document.getElementById('result-screen').classList.add('active');

    // 计算人格类型
    const e = answers.EI >= 5 ? 'E' : 'I';
    const s = answers.SN >= 5 ? 'S' : 'N';
    const t = answers.TF >= 5 ? 'T' : 'F';
    const j = answers.JP >= 5 ? 'J' : 'P';

    const type = e + s + t + j;
    const personality = personalityTypes[type];

    document.getElementById('personality-type').textContent = type;
    document.getElementById('result-title').textContent = personality.name;
    document.getElementById('result-description').textContent = personality.description;

    // 显示特征条
    setTimeout(() => {
        document.getElementById('ei-bar').style.width = (answers.EI / 10 * 100) + '%';
        document.getElementById('sn-bar').style.width = (answers.SN / 10 * 100) + '%';
        document.getElementById('tf-bar').style.width = (answers.TF / 10 * 100) + '%';
        document.getElementById('jp-bar').style.width = (answers.JP / 10 * 100) + '%';
    }, 100);
}

function restartTest() {
    currentQuestion = 0;
    answers = {
        EI: 0,
        SN: 0,
        TF: 0,
        JP: 0
    };

    document.getElementById('result-screen').classList.remove('active');
    document.getElementById('start-screen').classList.add('active');

    // 重置特征条
    document.getElementById('ei-bar').style.width = '0%';
    document.getElementById('sn-bar').style.width = '0%';
    document.getElementById('tf-bar').style.width = '0%';
    document.getElementById('jp-bar').style.width = '0%';
}
