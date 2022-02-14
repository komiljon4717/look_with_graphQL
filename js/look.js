const clientId = document.querySelector('#clientId')
const userForm = document.querySelector('#userForm')
const foodsForm = document.querySelector('#foodsForm')
const foodsCount = document.querySelector('#foodsCount')
const userHeader = document.querySelector('#userHeader')
const ordersList = document.querySelector('.orders-list')
const foodsSelect = document.querySelector('#foodsSelect')
const usernameInput = document.querySelector('#usernameInput')
const customersList = document.querySelector('.customers-list')
const telephoneInput = document.querySelector('#telephoneInput')

async function renderOrders(userId) {
    console.log("ok");
    if (!userId) return
    let {orders} = await getData(orders_query, {userId})
    console.log(orders);
    ordersList.innerHTML = null
    for (const order of orders) {
        const [li, img, div, count, name, ] = createElements('li', 'img', 'div', 'span', 'span')

        count.textContent = order.count
        name.textContent = order.food.foodName

        li.classList.add('order-item')
		name.classList.add('order-name')
		count.classList.add('order-count')

        img.src = API_IMG + order.food.foodImg
        div.append(name, count)
        li.append(img, div)
        ordersList.append(li)
    }
}


async function renderUsers() {
    // console.log("users");
    let {users} = await getData(users_query)

    customersList.innerHTML = null
    for (const user of users) {
        const [li, span, a] = createElements('li', 'span', 'a')

        span.textContent = user.username
        a.textContent = '+' + user.contact

        span.classList.add('customer-name')
        li.classList.add('customer-item')
		a.classList.add('customer-phone')

        a.setAttribute('href', 'tel:+' + user.contact)

        li.append(span, a)
        customersList.append(li)

        li.onclick = () => {
            
            clientId.textContent = user.userId
            userHeader.textContent = user.username
            window.localStorage.setItem('userId', user.userId)
			window.localStorage.setItem('username', user.username)

            renderOrders(user.userId)
        }
    }
    
}

async function renderFoods() {

    let {foods} = await getData(foods_query)
    // console.log("foods");
    for (const food of foods) {
        const [option] = createElements('option')
        option.textContent = food.foodName
        option.value = food.foodId

        foodsSelect.append(option)
    }
}

userForm.onsubmit = async event => {
    event.preventDefault()
    const username = usernameInput.value.trim()
    const contact = telephoneInput.value.trim()

    if (!(username.length < 30 && username.length)) {
        return alert('Wrong username')
    }

    if (!(/^998[389][012345789][0-9]{7}$/).test(contact)) {
        return alert('Invalid contact!')
    }

    const response = await getData(addUser_query, {username, contact})
    
    usernameInput.value = null
    telephoneInput.value = null

    if (response) return await renderUsers()
}

foodsForm.onsubmit = async event => {
    event.preventDefault()

    if (!foodsSelect.value) return
    if(!clientId.textContent) return
	if(!foodsCount.value || foodsCount.value > 10) return

    const response = await getData(addOrder_query, {
        foodId: +foodsSelect.value,
        userId: +clientId.textContent,
        count: +foodsCount.value
    })

    foodsSelect.value = 1
	foodsCount.value = null

    if (response) return await renderOrders(clientId.textContent)
}

const userId = window.localStorage.getItem('userId')
const username = window.localStorage.getItem('username')

userId && (clientId.textContent = userId)
username && (userHeader.textContent = username)

renderFoods()
renderUsers()
renderOrders()