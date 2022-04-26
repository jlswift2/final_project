# frozen_string_literal: true

module Types
  class UserInputType < Types::BaseInputObject
    argument :id, ID, required: false
    argument :username, String, required: true
    argument :email, String, required: true
    argument :password_digest, String, required: true
    argument :first_name, String, required: true
    argument :last_name, String, required: true
    argument :friend_code, String, required: true
    argument :created_at, GraphQL::Types::ISO8601DateTime, required: false
    argument :updated_at, GraphQL::Types::ISO8601DateTime, required: false
  end
end
