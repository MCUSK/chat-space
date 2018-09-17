# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique:true,index:true|
|email|string|null: false, unique:ture|

### Association
- has many :groups, through: :members
- has many :chats
- has many :members

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|string|null:false|
|chat_id|integer|null:false, foreign_key: true|

### Association
- has_many :users, througth: :members
- has_many :members
- has_many :chat

## cahtsテーブル
|Column|Type|Options|
|------|----|-------|
|image|text||
|log|text||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|created_at|timestamp||

### Association
- belongs_to :group
- belongs_to :user
