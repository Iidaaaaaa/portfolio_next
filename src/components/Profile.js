import React from "react";
import Image from "next/image";

const Profile = () => {
  return (
    <section id="profile" className="profile">
      <h2 className="profile__profile">PROFILE</h2>
      <p className="profile__user">My Profile</p>
      <div className="profile__itemlist">
        <p className="profile__item">.</p>
        <p className="profile__item">.</p>
        <p className="profile__item">.</p>
      </div>
      <div className="profile__both">
        <div className="profile__left">
          <Image
            width={300}
            height={300}
            className="profile__image"
            src="/public/image/profileicon.JPG"
            alt="Iida`s profile-icon"
          />
        </div>
        <div className="profile__right">
          <div className="profile__name">
            <p className="profile__text">飯田智成</p>
            <small className="profile__subtext">Iida Tomonari</small>
          </div>
          <div className="profile__aspiration">
            <p className="profile__text">フロントエンドエンジニア</p>
            <p className="profile__subtext">FRONT END ENGINEER</p>
          </div>
          <div className="profile__affiliation">
            <p className="profile__text">
              トライデントコンピュータ専門学校 Webデザイン学科
            </p>
          </div>
          <div className="profile__birthday">
            <p className="profile__text">生年月日 2005年2月7日</p>
          </div>
          <div className="profile__comment">
            <p className="profile__comment_text">
              2023年4月からWeb関係の勉強を始めました。技術の向上のため毎日頑張っています。
              <br />
              名古屋市中川区生まれ
              <br />
              座右の銘：「失敗はない、フィードバックあるのみ。」
            </p>
            <p className="profile__comment_text">特技：水泳（泳力検定２級）</p>
            <p className="profile__comment_text">
              資格：Webクリエイター能力認定試験エキスパート
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
