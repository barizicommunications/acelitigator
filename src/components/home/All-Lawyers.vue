<template>
  <div>
    <!-- Product Shop Section Begin -->
    <section class="product-shop spad" id="all-lawyers">
      <div class="container-fluid">
        <div class="row">
          <filters></filters>
          <div class="col-lg-9 order-1 order-lg-2">
            <div class="product-show-option">
              <div class="row">
                <div class="col-lg-7 col-md-7">
                  <div class="select-option">
                    <a-select
                    placeholder="Sort By..."
                      style="width: 250px"
                      @change="handleChange"
                      class="sorting"
                    >

                      <a-select-option value="jack">
                        Years of Experience
                      </a-select-option>
                      <a-select-option value="lucy"> Gender </a-select-option>
                    </a-select>

                  </div>
                </div>
                <div class="col-lg-5 col-md-5 text-right">
                  <p>Show 01- 09 Of 36 Advocates</p>
                </div>
              </div>
            </div>
            <div class="product-list">
              <div class="row">
                <div class="col-lg-4 col-sm-6">
                  <div class="product-item">
                    <div class="pi-pic">
                      <img
                        src="https://acelitigator.com/wp-content/uploads/2023/01/MicrosoftTeams-image-9.png"
                        alt=""
                      />
                      <div class="sale pp-sale">Verified</div>
                      <div class="icon">
                        <a href="#"><i class="ti-facebook"></i></a>
                        <a href="#"><i class="ti-twitter-alt"></i></a>
                        <a href="#"><i class="ti-linkedin"></i></a>
                        <a href="#"><i class="ti-pinterest"></i></a>
                      </div>
                      <router-link to="advocate">
                        <ul>
                          <li class="w-icon active">
                            <a href="#"><i class="fa fa-eye"></i></a>
                          </li>
                          <li class="quick-view">
                            <a href="#">+ View Profile</a>
                          </li>
                          <li class="w-icon">
                            <a href="#"><i class="fa fa-random"></i></a>
                          </li></ul
                      ></router-link>
                    </div>
                    <div class="pi-text">
                      <div class="catagory-name">Senior Advocate</div>
                      <a href="#">
                        <h5>Stella Orengo</h5>
                      </a>
                      <div class="product-price">
                        Commercial Law
                        <span>Litigation,</span>
                        <span>Litigation,</span>
                        <span>Litigation,</span>
                        <span>Criminal Law</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                  <div class="product-item">
                    <div class="pi-pic">
                      <img
                        src="https://acelitigator.com/wp-content/uploads/2023/01/MicrosoftTeams-image-7.png"
                        alt=""
                      />
                      <div class="icon">
                        <a href="#"><i class="ti-facebook"></i></a>
                        <a href="#"><i class="ti-twitter-alt"></i></a>
                        <a href="#"><i class="ti-linkedin"></i></a>
                        <a href="#"><i class="ti-pinterest"></i></a>
                      </div>
                      <router-link to="advocate">
                        <ul>
                          <li class="w-icon active">
                            <a href="#"><i class="fa fa-eye"></i></a>
                          </li>
                          <li class="quick-view">
                            <a href="#">+ View Profile</a>
                          </li>
                          <li class="w-icon">
                            <a href="#"><i class="fa fa-random"></i></a>
                          </li></ul
                      ></router-link>
                    </div>
                    <div class="pi-text">
                      <div class="catagory-name">Advocate</div>
                      <a href="#">
                        <h5>Brian Owalo</h5>
                      </a>
                      <div class="product-price">
                        Commercial Law
                        <span>Litigation,</span>
                        <span>Litigation,</span>
                        <span>Litigation,</span>
                        <span>Criminal Law</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                  <div class="product-item">
                    <div class="pi-pic">
                      <img
                        src="https://acelitigator.com/wp-content/uploads/2023/01/MicrosoftTeams-image-6.png"
                        alt=""
                      />
                      <div class="icon">
                        <a href="#"><i class="ti-facebook"></i></a>
                        <a href="#"><i class="ti-twitter-alt"></i></a>
                        <a href="#"><i class="ti-linkedin"></i></a>
                        <a href="#"><i class="ti-pinterest"></i></a>
                      </div>
                      <router-link to="advocate">
                        <ul>
                          <li class="w-icon active">
                            <a href="#"><i class="fa fa-eye"></i></a>
                          </li>
                          <li class="quick-view">
                            <a href="#">+ View Profile</a>
                          </li>
                          <li class="w-icon">
                            <a href="#"><i class="fa fa-random"></i></a>
                          </li></ul
                      ></router-link>
                    </div>
                    <div class="pi-text">
                      <div class="catagory-name">Advocate</div>
                      <a href="#">
                        <h5>Ambrose Waigwa</h5>
                      </a>
                      <div class="product-price">
                        Commercial Law
                        <span>Litigation,</span>
                        <span>Litigation,</span>
                        <span>Litigation,</span>
                        <span>Criminal Law</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                  <div class="product-item">
                    <div class="pi-pic">
                      <img
                        src="https://acelitigator.com/wp-content/uploads/2023/01/nelima.jpg"
                        alt=""
                      />
                      <div class="icon">
                        <a href="#"><i class="ti-facebook"></i></a>
                        <a href="#"><i class="ti-twitter-alt"></i></a>
                        <a href="#"><i class="ti-linkedin"></i></a>
                        <a href="#"><i class="ti-pinterest"></i></a>
                      </div>
                      <router-link to="advocate">
                        <ul>
                          <li class="w-icon active">
                            <a href="#"><i class="fa fa-eye"></i></a>
                          </li>
                          <li class="quick-view">
                            <a href="#">+ Quick View</a>
                          </li>
                          <li class="w-icon">
                            <a href="#"><i class="fa fa-random"></i></a>
                          </li></ul
                      ></router-link>
                    </div>
                    <div class="pi-text">
                      <div class="catagory-name">Advocate</div>
                      <a href="#">
                        <h5>Nelima Walubengo</h5>
                      </a>
                      <div class="product-price">
                        Commercial Law
                        <span>Litigation,</span>
                        <span>Litigation,</span>
                        <span>Litigation,</span>
                        <span>Criminal Law</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                  <div class="product-item">
                    <div class="pi-pic">
                      <img
                        src="https://acelitigator.com/wp-content/uploads/2023/01/Carolyne-Rono.jpg"
                        alt=""
                      />
                      <div class="icon">
                        <a href="#"><i class="ti-facebook"></i></a>
                        <a href="#"><i class="ti-twitter-alt"></i></a>
                        <a href="#"><i class="ti-linkedin"></i></a>
                        <a href="#"><i class="ti-pinterest"></i></a>
                      </div>
                      <router-link to="advocate">
                        <ul>
                          <li class="w-icon active">
                            <a href="#"><i class="fa fa-eye"></i></a>
                          </li>
                          <li class="quick-view">
                            <a href="#">+ View Profile</a>
                          </li>
                          <li class="w-icon">
                            <a href="#"><i class="fa fa-random"></i></a>
                          </li>
                        </ul>
                      </router-link>
                    </div>
                    <div class="pi-text">
                      <div class="catagory-name">Advocate</div>
                      <a href="#">
                        <h5>Carolyne Rono</h5>
                      </a>
                      <div class="product-price">
                        Commercial Law
                        <span>Litigation,</span>
                        <span>Litigation,</span>
                        <span>Litigation,</span>
                        <span>Criminal Law,</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                  <div class="product-item">
                    <div class="pi-pic">
                      <img
                        src="https://acelitigator.com/wp-content/uploads/2023/01/Mahmoud-Shalima.jpg"
                        alt=""
                      />
                      <div class="icon">
                        <a href="#"><i class="ti-facebook"></i></a>
                        <a href="#"><i class="ti-twitter-alt"></i></a>
                        <a href="#"><i class="ti-linkedin"></i></a>
                        <a href="#"><i class="ti-pinterest"></i></a>
                      </div>
                      <ul>
                        <li class="w-icon active">
                          <a href="#"><i class="fa fa-eye"></i></a>
                        </li>
                        <li class="quick-view">
                          <a href="#">+ View Profile</a>
                        </li>
                        <li class="w-icon">
                          <a href="#"><i class="fa fa-random"></i></a>
                        </li>
                      </ul>
                    </div>
                    <div class="pi-text">
                      <div class="catagory-name">Advocate</div>
                      <a href="#">
                        <h5>Mohammed Shalimma</h5>
                      </a>
                      <div class="product-price">
                        Commercial Law
                        <span>Litigation,</span>
                        <span>Litigation,</span>
                        <span>Litigation,</span>
                        <span>Criminal Law,</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="loading-more">
              <i class="icon_loading"></i>
              <a href="#"> Loading More </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Product Shop Section End -->
  </div>
</template>

<script>
import Filters from "../../components/Widgets/Filters.vue";
export default {
  components: { Filters },
};
</script>

<style></style>
