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


## userテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique:true|
|email|string|null: false, unique:ture|

### Association
- has many :groups, through: :members
- has many :chat


## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## groupテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|string|null:false|
|chat_id|integer|null:false, foreign_key: true|

### Association
- has many :users, througth: :members
- belongs_to :chat

## cahtテーブル
|Column|Type|Options|
|------|----|-------|
|log|text|null:false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|created_at|timestamp||

### Association
- belongs_to :group
