// 密码验证和语录页面功能

// 语录数据 - 这里只放示例，您可以后续添加完整语录
const quotesData = {
    // 语文老师
    chenlin: {
        name: "陈琳老师",
        subject: "语文",
        quotes: [
            "1. 平时不愿意做这些事（整文件夹），要成绩时又那么迫切，让人匪夷所思。",
            "2. 如果谁讲父为子纲，你要跳起来了",
            "3. 人生的一些遗憾，比如考上清华没上北大",
            "4. （辩论赛）不能你抛出个球，我踢个毽子过去，咱们各玩各的",
            "5. 你们就31吧，老师又不是瞎子",
            "6. 让你站一会儿，让你练一会儿核心力量",
            "7. 政治成绩出来之前怎么不\"热奋\"一下呢？",
            "8. 刘梓楷，你骗我，只有49个字",
            "9. 好可怕，这是什么怪兽的眼睛",
            "10. \"手撕鬼子\"为什么不想看？瞎扯淡！"
            // ... 这里可以添加剩余的290条语录
        ]
    },
    
    xiaobao: {
        name: "小宝老师",
        subject: "语文",
        quotes: [
            "@全体成员 背诵《六国论》时，务必将译文放在边上，一边理顺大意一边背诵...",
            "@全体成员 大家还是尽可能把六国论给它背掉...",
            "@全体成员 讲评课件一定要认真看，作业一定要认真做...",
            "作文已改完，问题非常严重：1、审题 2、这是一元作文...",
            "像今年这种情况，语文英语必须拿下！高分段就看你这两门拿捏如何了！"
        ]
    },
    
    // 数学老师
    jinsheng: {
        name: "金声老师",
        subject: "数学",
        quotes: [
            "1. 知行合一，刻意练习",
            "2. 我对你的爱，就像这个圆一样，永远没有终点/起点",
            "3. 生气，真的很生气！！！",
            "4. 你们在福州格致中学是极大值，但在福州市不是",
            "5. 只有在别的课上做数学作业的份，没有在数学课上做别的作业的份",
            "6. 我觉得大家一定要去运动的",
            "7. 注意力资源分配失衡",
            "8. 我其实挺喜欢考试，考试能把你们的问题暴露出来",
            "9. 我这个人不喜欢欠债，来还债了",
            "10. tan的图象婀娜多姿，前凸后翘"
        ]
    },
    
    // 其他老师的数据结构类似...
    
    // 学生语录
    shishuojiayu: {
        name: "《世说佳语》",
        subject: "学生语录",
        quotes: [
            "1. 我就是\"细胞质\"！（佳佳发现自己与\"细胞质\"同一天生日）",
            "2. 来迟了，不曾迎接远客（koè）",
            "3. 你是不是一头------大肥猪（对林铠墨）",
            "4. 呵哼呵（似人笑声）",
            "5. 没有加热的稀有化学书，可以卖到几万（林铠墨评：那你涂掉啊）",
            "6. 你是~我的~我是~你的~谁",
            "7. 互相挑逗------逗着玩呢",
            "8. （鼓掌）全格致最伟大的老师（指金声）",
            "9. 章皓晨好凶猛",
            "10. 不是扫了吗？（佳佳摆出神秘妖娆姿势）（林慧琳：佳佳，不要讲话了）"
        ]
    },
    
    // 教官语录
    xingchen: {
        name: "星辰教官",
        subject: "教官语录",
        quotes: [
            "1. 国有国法，家有家规，实践基地也有自己的规章制度",
            "2. 我信任你们，相信你们已经将手机和零食上交了",
            "3. 现在可以举手了吧，我看看有多少人带手机",
            "4. （叫周善进一直站在外面不进队列）",
            "5. \"向前对正\"\"1,2,3！\"\"调整坐姿\"\"四变二！\"",
            "6. 365792#，246802#",
            "7. 没想到你们下来的还挺早（哎哟，撞上配电箱了）",
            "8. \"跳啊，继续跳啊\"",
            "9. （福州格致中学校长：某某某）",
            "10. （5秒钟之内鼓掌30下，手没红就是偷懒）（坐下的时候做椅子的前1/3）"
        ]
    }
};

// 密码验证功能
document.addEventListener('DOMContentLoaded', function() {
    // 检查当前页面
    if (document.body.classList.contains('login-page')) {
        initLoginPage();
    } else if (document.body.classList.contains('quotes-page')) {
        initQuotesPage();
    }
});

// 登录页面初始化
function initLoginPage() {
    const passwordInput = document.getElementById('password');
    const submitButton = document.getElementById('submit-password');
    const errorMessage = document.getElementById('password-error');
    
    // 检查是否已经通过验证
    if (localStorage.getItem('quotesAuthenticated') === 'true') {
        window.location.href = 'quotes.html';
        return;
    }
    
    // 密码验证函数
    function checkPassword() {
        const password = passwordInput.value.trim();
        const correctPassword = '20080615';
        
        if (password === correctPassword) {
            // 验证成功
            localStorage.setItem('quotesAuthenticated', 'true');
            window.location.href = 'quotes.html';
        } else {
            // 验证失败
            errorMessage.textContent = '密码错误';
            passwordInput.value = '';
            passwordInput.classList.add('shake');
            setTimeout(() => {
                passwordInput.classList.remove('shake');
            }, 500);
            passwordInput.focus();
        }
    }
    
    // 事件监听
    submitButton.addEventListener('click', checkPassword);
    
    passwordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkPassword();
        }
    });
    
    // 自动聚焦到密码输入框
    passwordInput.focus();
}

// 语录页面初始化
function initQuotesPage() {
    // 检查是否通过验证
    if (localStorage.getItem('quotesAuthenticated') !== 'true') {
        window.location.href = 'index.html';
        return;
    }
    
    // 初始化导航
    initNavigation();
    
    // 初始化返回顶部按钮
    initBackToTop();
    
    // 默认加载第一个老师的语录
    loadTeacherQuotes('chenlin');
}

// 初始化导航
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const teacherItems = document.querySelectorAll('.teacher-item');
    
    // 科目导航点击事件
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const subject = this.getAttribute('data-subject');
            
            // 切换活跃状态
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            // 显示/隐藏对应的老师列表
            document.querySelectorAll('.teacher-list').forEach(list => {
                list.classList.remove('active');
            });
            
            const teacherList = document.querySelector(`.teacher-list.${subject}`);
            if (teacherList) {
                teacherList.classList.add('active');
            }
            
            // 如果是学生或教官，直接加载语录
            if (subject === 'students' || subject === 'military') {
                const teacherId = subject === 'students' ? 'shishuojiayu' : 'xingchen';
                loadTeacherQuotes(teacherId);
            }
        });
    });
    
    // 老师导航点击事件
    teacherItems.forEach(item => {
        item.addEventListener('click', function() {
            // 移除所有活跃状态
            teacherItems.forEach(teacher => teacher.classList.remove('active'));
            
            // 设置当前活跃
            this.classList.add('active');
            
            // 加载对应老师的语录
            const teacherId = this.getAttribute('data-teacher');
            loadTeacherQuotes(teacherId);
        });
    });
}

// 加载老师语录
function loadTeacherQuotes(teacherId) {
    const container = document.getElementById('quotes-container');
    const breadcrumb = document.getElementById('breadcrumb-path');
    
    if (!quotesData[teacherId]) {
        // 如果没有数据，显示空状态
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-book-open"></i>
                <h3>语录正在整理中</h3>
                <p>该老师的语录正在收录，敬请期待...</p>
            </div>
        `;
        breadcrumb.textContent = "加载中...";
        return;
    }
    
    const teacher = quotesData[teacherId];
    
    // 更新面包屑导航
    breadcrumb.textContent = `${teacher.subject} / ${teacher.name}`;
    
    // 生成语录HTML
    let quotesHTML = `
        <div class="teacher-header">
            <h2>${teacher.name}</h2>
            <span class="subject-badge">${teacher.subject}</span>
        </div>
        
        <div class="quote-items">
    `;
    
    teacher.quotes.forEach(quote => {
        quotesHTML += `<div class="quote-item">${quote}</div>`;
    });
    
    quotesHTML += `</div>`;
    
    // 更新容器内容
    container.innerHTML = quotesHTML;
    
    // 重置计数器
    container.style.counterReset = 'quote-counter';
}

// 初始化返回顶部按钮
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// 退出登录功能（可选）
function logout() {
    localStorage.removeItem('quotesAuthenticated');
    window.location.href = 'index.html';
}
