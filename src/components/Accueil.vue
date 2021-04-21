<template >
	<div>
		<Header/>
		<div class="acceuil">
			<div class="container h-100">
				<div class="row h-100 justify-content-center align-items-center">
					<div class="col-md-5">
						<div class="hero-content">
							<h1 class="hero-title">
								MODERN FURNITUR SHOP
							</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos numquam tempora, iure delectus totam minus quam aperiam ratione dolores magni voluptates ut necessitatibus odio ipsum fuga, voluptas ab praesentium nihil?
							</p>
							<div class="hero-btn mt-5">
							<router-link to="/inscription"> <button class="btn custom-btn btn-info mr-4" @click="inscrire">Inscrivez vous</button></router-link> 
							</div>
						</div>
					</div>
					<div class="col-md-7">
							<div class="graphic">
									<img id="cool" src="../assets/famille.jpg" alt="">
							</div>
					</div>
				</div>
			</div>
			

		</div>
	</div>
	
</template>
<script>

import Header from './Header.vue'

export default {
		name : 'Accueil',
		components : {Header}
}
</script>

